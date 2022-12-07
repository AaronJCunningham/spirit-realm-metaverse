import { useState } from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import {
  useAddress,
  useContract,
  ConnectWallet,
  Web3Button,
  useNFT,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";

const signatureDropAddress = "0xc92cEe868e90eC2053D5C80571a98eac8401c1AF";

const Claim = () => {
  const [userName, setUserName] = useState("");

  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );

  const address = useAddress();

  async function claimWithSignature() {
    const signedPayloadReq = await fetch(`/api/generate-mint-signature`, {
      method: "POST",
      body: JSON.stringify({
        address: address,
        username: userName,
      }),
    });

    console.log(signedPayloadReq);

    if (signedPayloadReq.status === 400) {
      alert(
        "Please double check your user name is typed correctly and that you retweeted the post. Unfortunately quote tweets don't work."
      );
      return;
    } else {
      try {
        const signedPayload = await signedPayloadReq.json();

        console.log(signedPayload);

        const nft = await signatureDrop?.signature.mint(signedPayload);

        alert(`Succesfully minted NFT!`);
      } catch (error) {
        alert(error?.message);
      }
    }
  }

  console.log(userName);

  const handleInput = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div className="page-container">
      <div className="optionSelectBox">
        <ConnectWallet />
      </div>
      <TwitterShareButton url="https://twitter.com/Aaron_1337/status/1595124244236890113">
        <TwitterIcon />
      </TwitterShareButton>
      <div>{address}</div>
      <form>
        Enter your twitter username before claiming
        <input value={userName} onChange={handleInput} />
      </form>
      <div className="optionSelectBox">
        <img
          src={`/icons/analytics.png`}
          alt="signature-mint"
          className="cardImg"
        />
        <h2 className="selectBoxTitle">Mint with Signature</h2>
        <p className="selectBoxDescription">
          Check if you are eligible to mint an NFT for free, by using
          signature-based minting.
        </p>

        <Web3Button
          contractAddress={signatureDropAddress}
          action={() => claimWithSignature()}
          colorMode="dark"
        >
          Claim With Signature
        </Web3Button>
      </div>
    </div>
  );
};

export default Claim;
