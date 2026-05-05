import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

export const Portrait = ({ exhibit, handleClose }) => {
  return (
    <div className="instructions-container">
      <div className="instructions-inner-container">
        <div className="menu-close-button-inst" onClick={handleClose}>
          <AiOutlineCloseCircle />
        </div>

        <div className="description-instructions">
          <div className="artshow-container-portrait">
            <div className="artshow-image-container-portrait">
              <a href={exhibit.URL} target="_blank" rel="noreferrer">
                <Image
                  src={exhibit.imageURL}
                  width={exhibit.width / 2}
                  height={exhibit.height / 2}
                  layout="responsive"
                  objectFit="cover"
                />
              </a>
            </div>
            <div>
              <div>
                <h4 className="artshow-h4">{exhibit.title}</h4>

                <p>Artist: {exhibit.artist}</p>
              </div>
              <p className="artshow-italics">"{exhibit.description}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
