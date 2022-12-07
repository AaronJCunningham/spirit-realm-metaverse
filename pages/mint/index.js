import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";

const signatureDropAddress = "0xc92cEe868e90eC2053D5C80571a98eac8401c1AF";

const Home = () => {
  const address = useAddress();

  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );

  async function claim() {
    try {
      const tx = await signatureDrop?.claim(1);
      alert(`Succesfully minted NFT!`);
    } catch (error) {
      alert(error?.message);
    }
  }

  async function claimWithSignature() {
    const signedPayloadReq = await fetch(`/api/generate-mint-signature`, {
      method: "POST",
      body: JSON.stringify({
        address: address,
        username: "whosthereplease",
      }),
    });

    console.log(signedPayloadReq);

    if (signedPayloadReq.status === 400) {
      alert(
        "Looks like you don't own an early access NFT :( You don't qualify for the free mint."
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

  return (
    <div className="page-container">
      {/* Top Section */}
      <h1 className="h1">Signature Drop</h1>

      <p className="describe">
        In this example, users who own one of our
        <a href="https://opensea.io/collection/thirdweb-community">
          Early Access NFTs
        </a>
        can mint for free using the
        <a href="https://portal.thirdweb.com/pre-built-contracts/signature-drop#signature-minting">
          Signature Mint
        </a>
        . However, for those who don&apos;t own an Early Access NFT, they can
        still claim using the regular claim function.
      </p>

      <div className="nftBoxGrid">
        <div className="optionSelectBox">
          <img src={`/icons/drop.webp`} alt="drop" className="cardImg" />
          <h2 className="selectBoxTitle">Claim NFT</h2>
          <p className="selectBoxDescription">
            Use the normal <code>claim</code> function to mint an NFT under the
            conditions of the claim phase.
          </p>

          <Web3Button
            contractAddress={signatureDropAddress}
            action={() => claim()}
            colorMode="dark"
          >
            Claim
          </Web3Button>
        </div>

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
    </div>
  );
};

export default Home;
