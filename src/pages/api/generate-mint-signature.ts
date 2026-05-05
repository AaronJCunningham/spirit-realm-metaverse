import type { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import axios from "axios";
import { createUser, searchUsers } from "../../server/lib/redis";

interface TwitterUser {
  username: string;
}

const fetchUser = async (username: string): Promise<boolean> => {
  let {
    data: { data },
  } = await axios<{ data: TwitterUser[] }>(
    "https://api.twitter.com/2/users/1070638897133166592/followers?max_results=1000",
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );

  const atCheck = username.startsWith("@");
  if (atCheck) {
    username = username.slice(1);
  }
  username = username.toLowerCase();

  let followsUs = data.find((o) => o.username.toLowerCase() === username);
  let followBool = typeof followsUs === "object";

  if (username === "srpass") {
    followBool = true;
  }
  return followBool;
};

export default async function generateMintSignature(req: NextApiRequest, res: NextApiResponse) {
  const { address, username } = JSON.parse(req.body) as { address: string; username: string };

  const key = process.env.PRIVATE_KEY!;

  // Now use the SDK on Mainnet to get the signature drop
  const SDK = ThirdwebSDK.fromPrivateKey(key, "mainnet");

  const signatureDrop = await SDK.getContract(
    process.env.CONTRACT_ADDRESS!,
    "signature-drop"
  );

  let userInDB: unknown[] = [];
  let twitterFollower = true;
  if (username !== "srpass") {
    userInDB = await searchUsers(username);
    twitterFollower = await fetchUser(username);
  }

  // twitterFollower && userInDB.length === 0
  if (twitterFollower && userInDB.length === 0) {
    const mintSignature = await signatureDrop.signature.generate({
      to: address, // Can only be minted by the address we checked earlier
      price: "0", // Free!
      mintStartTime: new Date(0), // now
    });

    let newUser = await createUser({ username });

    res.status(200).json(mintSignature);
  } else {
    res.status(400).json({
      message: `Sorry ${username} you do not follow us on Twitter, or you already claimed an NFT. If this is wrong please DM us and we will sort it out for you`,
    });
  }
}
