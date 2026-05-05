import { contractAddress } from "../const/yourDetails";
import type { ThirdwebSDK } from "@thirdweb-dev/sdk";

export default async function checkBalance(sdk: ThirdwebSDK, address: string): Promise<boolean> {
  const signatureDrop = await sdk.getSignatureDrop(
    contractAddress // replace this with your contract address
  );

  const balance = await signatureDrop.balanceOf(address);

  // // gt = greater than
  return balance.gt(0);
}
