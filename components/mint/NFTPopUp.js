import { ThirdwebNftMedia, useNFT, useContract } from "@thirdweb-dev/react";
import { useEffect } from "react";

const signatureDropAddress = "0xC90eAec4fE6209b540fae6595E927751387Af1b3";

const NFTPopUp = ({ tokenId }) => {
  const { contract: signatureDrop } = useContract(
    signatureDropAddress,
    "signature-drop"
  );
  const { data } = useNFT(signatureDrop, tokenId);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1500);
  }, []);

  return data ? (
    <div id="reveal" className="nft-reveal-container">
      <div className="nft-reveal-image">
        <h2>CONGRATULATIONS!!! </h2>
        <h3>You got {data.metadata.name}</h3>
        <p>
          Don't forget to join our{" "}
          <a
            href="https://discord.gg/bkpVuPP3jQ"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>{" "}
          so you can vote on what happens next in the metaverse & movie!
        </p>
        <ThirdwebNftMedia metadata={data.metadata} className="image" />
      </div>
    </div>
  ) : null;
};

export default NFTPopUp;
