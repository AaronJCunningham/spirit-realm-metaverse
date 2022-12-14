import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

import useMountTransition from '../hooks/useMountTrainsition';

import { useChatFocus, useCustomColor, useCustomName } from '../store/store';
import socket from '../socketUtlities/socketConnection';

export const MetaMenu = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [chatFocus, setChatFocus] = useChatFocus((state) => [state.chatFocus, state.setChatFocus]);
  const [userName, setUserName] = useCustomName((state) => [state.userName, state.setUserName]);
  const [customColor, setCustomColor] = useCustomColor((state) => [state.customColor, state.setCustomColor]);

  const hasTransitionedIn = useMountTransition(isMounted, 1000);

  const handleChangeComplete = (col) => {
    setCustomColor(col.hex);
    socket.emit('customizeColor', { id: socket.id, color: col.hex });
  };

  const onHandleNameInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    setUserName(inputValue);
    socket.emit('customizeName', {
      id: socket.id,
      username: inputValue,
    });
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.code === 'KeyM') {
      setIsMounted(!isMounted);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="container">
      <div className="content">
        {(hasTransitionedIn || isMounted) && (
          <div className={`card ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
            <div className="inner-menu-container">
              <div className="color-picker-container">
                <p>Pick a hoodie color.</p>
                <SketchPicker color={customColor} onChangeComplete={handleChangeComplete} />
              </div>
              <div className="menu-items-container">
                <p>Choose A User Name</p>
                <input type="text" name="name" onChange={onHandleNameInput} value={inputValue} />
                <button onClick={handleSubmit}>Change</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
