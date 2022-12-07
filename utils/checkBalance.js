import { contractAddress } from "../const/yourDetails";

export default async function checkBalance(sdk, address) {
  const signatureDrop = await sdk.getSignatureDrop(
    contractAddress // replace this with your contract address
  );

  const balance = await signatureDrop.balanceOf(address);
  console.log("signatureDrop", balance);

  // // gt = greater than
  return balance.gt(0);
}
