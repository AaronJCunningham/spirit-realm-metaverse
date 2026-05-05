import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const MobilePopUp = () => {
  const [open, setOpen] = useState(true);

  return open ? (
    <div className="instructions-container">
      <div className="instructions-inner-container">
        <div className="menu-close-button-inst" onClick={() => setOpen(false)}>
          <AiOutlineCloseCircle />
        </div>
        <div>
          <h4 className="welcome-h4">WELCOME TO THE SPIRIT REALM</h4>
        </div>
        <div className="description-instructions">
          <p>
            Our metaverse is currently unavaiable on this device. Try on
            desktop. Join our{" "}
            <a
              href="https://discord.com/invite/bkpVuPP3jQ"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>{" "}
            to vote on what happens next!
          </p>
        </div>
      </div>
    </div>
  ) : null;
};
