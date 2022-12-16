import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const fetchUser = async (username) => {
  let {
    data: { data },
  } = await axios(
    "https://api.twitter.com/2/tweets/1548036479187685380/retweeted_by",
    {
      headers: {
        Authorization:
          "Bearer TWITTER_BEARER_TOKEN_REMOVED",
      },
    }
  );

  // const test = JSON.parse(twitter_user);
  let retweetObj = data.find((o) => o.username === username);
  let retweetBool = typeof retweetObj === "object";

  return retweetBool;
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

  let userHasToken = await fetchUser(username);

  console.log("token", userHasToken);

  // If the user has an early access NFT, generate a mint signature
  if (true) {
    const mintSignature = await signatureDrop.signature.generate({
      to: address, // Can only be minted by the address we checked earlier
      price: "0", // Free!
      mintStartTime: new Date(0), // now
    });

    res.status(200).json(mintSignature);
  } else {
    res.status(400).json({
      message: "User does not have an early access NFT",
    });
  }
}
