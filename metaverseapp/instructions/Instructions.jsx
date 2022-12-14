import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Instructions = () => {
  const [open, setOpen] = useState(true);

  return open ? (
    <div className="instructions-container">
      <div className="instructions-inner-container">
        <button onClick={() => setOpen(false)}>
          <AiOutlineCloseCircle />
        </button>
        <p>TEST</p>
      </div>
    </div>
  ) : null;
};
