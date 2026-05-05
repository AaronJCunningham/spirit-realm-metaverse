import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Instructions = () => {
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
            CHARACTER MOVEMENT: A-W-S-D to move, SPACE to jump,
            Left-Mouse-Button to look around
          </p>
          <p>Click CHAT to chat. Click Menu to customize your character.</p>
          <p>
            Join our{" "}
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
