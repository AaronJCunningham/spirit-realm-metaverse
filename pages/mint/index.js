import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";
import { SignedPayload721WithQuantitySignature } from "@thirdweb-dev/sdk";

const signatureDropAddress = process.env.CONTRACT_ADDRESS;

const Home = () => {
  const refFree = useRef();
  const refBuy = useRef();

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      width: "82%",
      "min-height": "255px",
      duration: 0.5,
    });
  };
  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      width: "80%",
      "min-height": "250px",
      duration: 0.5,
    });
  };

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
      <h1 className="h1-mint">5K NFTS</h1>
      <p className="description">
        Only the owners of our NFT collection can vote on what happens next in
        our movie. Luckily for you, these NFTs are free to obtain. In addition
        to giving you the ability to participate in the decision-making process
        for the movie, owning an NFT will also unlock a range of features on our
        roadmap. These features will be available exclusively to NFT owners, so
        be sure to get yours today.
      </p>
      <div className="list-container">
        <h4>It's super simple to claim a free NFT</h4>
        <ul className="ul-mint">
          <li>Follow us on Twitter</li>
          <li>Retweet our pinned post</li>
          <li>Claim a free NFT</li>
        </ul>
      </div>
      <p className="description">
        You are only eligible to receive one free NFT per wallet. If you would
        like to purchase additional NFTs, please use the Buy NFT section below.
        This will allow you to expand your collection and unlock even more
        features on our roadmap. Thank you for your interest in our NFT
        collection!
      </p>
      <div className="nftBoxGrid">
        <div
          ref={refFree}
          className="optionSelectBox"
          onMouseEnter={() => handleMouseEnter(refFree)}
          onMouseLeave={() => handleMouseLeave(refFree)}
          style={{ width: "80%", height: "90%" }}
        >
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
        <div
          className="optionSelectBox"
          ref={refBuy}
          onMouseEnter={() => handleMouseEnter(refBuy)}
          onMouseLeave={() => handleMouseLeave(refBuy)}
          style={{ width: "80%", height: "90%" }}
        >
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
