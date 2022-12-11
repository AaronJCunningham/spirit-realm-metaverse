import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";

const signatureDropAddress = process.env.CONTRACT_ADDRESS;

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
      <h1 className="h1">5K Digital Collectibles</h1>
      <p className="describe">
        Only holders of our collection can vote on the movie and visit the
        metaverse, luckily for you they are free. Claiming a free NFT is simple:
      </p>
      <ul>
        <li>Follow us on Twitter</li>
        <li>Retweet our pinned post</li>
        <li>Claim a free NFT</li>
      </ul>
      <p className="describe">
        Only one free NFT per wallet, but if you would like to buy another go
        ahead and use the Buy NFT section below.
      </p>
      <div className="nftBoxGrid">
        <div className="optionSelectBox">
          <h2 className="selectBoxTitle">Free NFT for our followers</h2>
          <p className="selectBoxDescription">
            Our Twitter followers can claim a free NFT. See instructions above.
          </p>

          <Web3Button
            contractAddress={signatureDropAddress}
            action={() => claimWithSignature()}
            colorMode="dark"
          >
            Free NFT
          </Web3Button>
        </div>
        <div className="optionSelectBox">
          <h2 className="selectBoxTitle">Purchase an NFT</h2>
          <p className="selectBoxDescription">Buy an NFT for 0.1 ETH.</p>
          <Web3Button
            contractAddress={signatureDropAddress}
            action={() => claim()}
            colorMode="dark"
          >
            Claim
          </Web3Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
