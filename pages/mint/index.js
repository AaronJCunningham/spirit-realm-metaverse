import { useRef, useState } from "react";
import { gsap } from "gsap";
import {
  useAddress,
  useContract,
  Web3Button,
  useNFT,
} from "@thirdweb-dev/react";

import NFTPopUp from "../../components/mint/NFTPopUp";
import MetaDataHeader from "../../components/metaheader/MetaDataHeader";

const signatureDropAddress = "0xC90eAec4fE6209b540fae6595E927751387Af1b3";

const desc =
  "We created a collection of 5000 PFP NFTs, each of which represents a unique version of a character from our movie.";

const Home = () => {
  const refFree = useRef();
  const refBuy = useRef();

  const [username, setUserName] = useState("");
  const [tokenId, setTokenId] = useState(null);
  const [claimedNFT, setClaimedNFT] = useState(null);

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

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );

  async function claim() {
    try {
      const tx = await signatureDrop?.claim(1);

      if (tx) {
        setTokenId(tx[0]?.id.toNumber());
      }
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
        username: username,
      }),
    });

    if (signedPayloadReq.status === 400) {
      alert(
        "Whoops, something went wrong. Either you do not follow us, or you already claimed an NFT. If this is a mistake please contact us on Discord :)"
      );
      return;
    } else {
      try {
        const signedPayload = await signedPayloadReq.json();

        const nft = await signatureDrop?.signature.mint(signedPayload);

        if (nft) {
          setTokenId(nft?.id.toNumber());
        }
      } catch (error) {
        alert("error", error?.message);
      }
    }
  }

  let fetchedNFT = useNFT(signatureDrop, 20);

  return (
    <>
      <MetaDataHeader title={"Mint"} content={desc} />
      <div className="page-container">
        <h1 className="h1-mint">5K NFTS</h1>
        <p className="description">
          Only the owners of our NFT collection can vote on what happens next in
          our movie and metaverse. Luckily for you, these NFTs are free to
          obtain.
        </p>
        <p className="description">
          In addition to giving you the ability to participate in the
          decision-making process for the movie, owning an NFT will also unlock
          a range of features on our roadmap. These features will be available
          exclusively to NFT owners, so be sure to get yours today.
        </p>
        <div className="list-container">
          <h4>It's super simple to claim a free NFT</h4>
          <ul className="ul-mint">
            <li>
              <a
                href="https://twitter.com/shiloh_spirit"
                target="_blank"
                rel="noreferrer"
              >
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/shiloh_spirit/status/1606306292863492096"
                target="_blank"
                rel="noreferrer"
              >
                Retweet our pinned post
              </a>
            </li>
            <li>Claim a free NFT</li>
          </ul>
        </div>
        <p className="description">
          You are only eligible to receive one free NFT per wallet. If you would
          like to purchase additional NFTs, please use the Buy NFT section
          below. This will allow you to expand your collection and unlock even
          more features on our roadmap. Thank you for your interest in our NFT
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

            <div className="username-selection-container-mint">
              <div className="input-container">
                <input
                  className="mint-input-text"
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUserNameInput}
                  placeholder={"Enter Your Twitter Name! (example @Aaron_1337)"}
                />
              </div>
            </div>
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
            <h2 className="selectBoxTitle">Buy</h2>
            <p className="selectBoxDescription">Buy an NFT for 0.025 ETH.</p>
            <Web3Button
              contractAddress={signatureDropAddress}
              action={() => claim()}
              colorMode="dark"
            >
              Claim
            </Web3Button>
          </div>
        </div>
        {tokenId !== null && <NFTPopUp tokenId={tokenId} />}
      </div>
    </>
  );
};

export default Home;
