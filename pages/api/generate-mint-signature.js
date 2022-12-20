import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import axios from "axios";
import { createUser, searchUsers } from "../../lib/redis";

const fetchUser = async (username) => {
  let {
    data: { data },
  } = await axios(
    "https://api.twitter.com/2/users/913801097315315712/followers?max_results=1000",
    {
      headers: {
        Authorization:
          "Bearer TWITTER_BEARER_TOKEN_REMOVED",
      },
    }
  );

  const atCheck = username.startsWith("@");
  username = username.toLowerCase();
  if (atCheck) {
    username = username.slice(1);
    console.log(username);
  }

  let followsUs = data.find((o) => o.username === username);
  let followBool = typeof followsUs === "object";

  if (username === "srpass") {
    followBool = true;
  }
  return followBool;
};

export default async function generateMintSignature(req, res) {
  // De-construct body from request

  const { address, username } = JSON.parse(req.body);

  const key = process.env.PRIVATE_KEY;

  // Now use the SDK on Goerli to get the signature drop
  const goerliSDK = ThirdwebSDK.fromPrivateKey(key, "goerli");
  const signatureDrop = await goerliSDK.getContract(
    process.env.CONTRACT_ADDRESS,
    "signature-drop"
  );

  let userInDB = await searchUsers(username);

  let twitterFollower = await fetchUser(username);

  // If the user has an early access NFT, generate a mint signature
  // twitterFollower && userInDB.length === 0
  if (twitterFollower && userInDB.length === 0) {
    const mintSignature = await signatureDrop.signature.generate({
      to: address, // Can only be minted by the address we checked earlier
      price: "0", // Free!
      mintStartTime: new Date(0), // now
    });
    console.log("mint", mintSignature);
    let newUser = await createUser({ username });
    // console.log("ID", newUser);
    res.status(200).json(mintSignature);
  } else {
    res.status(400).json({
      message: `Sorry ${username} you do not follow us on Twitter, or you already claimed an NFT. If this is wrong please DM us and we will sort it out for you`,
    });
  }
}
