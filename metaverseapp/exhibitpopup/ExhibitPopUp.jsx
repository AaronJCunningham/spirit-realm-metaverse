import { useSetExhibit } from "../store/MetaStore";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

export const ExhibitPopUp = () => {
  const [exhibit, setExhibit] = useSetExhibit((state) => [
    state.exhibit,
    state.setExhibit,
  ]);

  return exhibit.bool ? (
    <div className="instructions-container">
      <div className="instructions-inner-container">
        <div
          className="menu-close-button-inst"
          onClick={() => setExhibit(false)}
        >
          <AiOutlineCloseCircle />
        </div>

        <div className="description-instructions">
          <div className="artshow-container">
            {/* <div className="artshow-image-container"> */}
            {/* <Image
                  src={exhibit.imageURL}
                  width={exhibit.width / 2}
                  height={exhibit.height / 2}
                  layout="responsive"
                  objectFit="cover"
                /> */}
            {/* </div> */}
            <div>
              <a href={exhibit.URL} target="_blank" rel="noreferrer">
                <h4 className="artshow-h4">{exhibit.title}</h4>
              </a>
              <p>Artist: {exhibit.artist}</p>
            </div>
            <p className="artshow-italics">"{exhibit.description}"</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
