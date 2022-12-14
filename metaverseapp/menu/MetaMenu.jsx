import { useCallback } from "react";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { AiOutlineCloseCircle } from "react-icons/ai";

import useMountTransition from "../hooks/useMountTrainsition";

import {
  useChatFocus,
  useCustomColor,
  useCustomName,
} from "../store/MetaStore";
import socket from "../socketUtlities/socketConnection";

export const MetaMenu = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [chatFocus, setChatFocus] = useChatFocus((state) => [
    state.chatFocus,
    state.setChatFocus,
  ]);
  const [userName, setUserName] = useCustomName((state) => [
    state.userName,
    state.setUserName,
  ]);
  const [customColor, setCustomColor] = useCustomColor((state) => [
    state.customColor,
    state.setCustomColor,
  ]);

  const hasTransitionedIn = useMountTransition(isMounted, 1000);

  const handleChangeComplete = (col) => {
    setCustomColor(col.hex);
    socket.emit("customizeColor", { id: socket.id, color: col.hex });
  };

  const onHandleNameInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    setUserName(inputValue);
    socket.emit("customizeName", {
      id: socket.id,
      username: inputValue,
    });
    setInputValue("");
  };

  const handleMenuClick = () => {
    setIsMounted(!isMounted);
    setChatFocus(!chatFocus);
  };
  const handleMenuClose = () => {
    setIsMounted(false);
    setChatFocus(false);
  };

  return (
    <div className="content">
      <div className="menu-tab-container" onClick={handleMenuClick}>
        Menu
      </div>
      {(hasTransitionedIn || isMounted) && (
        <div
          className={`card ${hasTransitionedIn && "in"} ${
            isMounted && "visible"
          }`}
        >
          <div className="inner-menu-container">
            <div className="color-picker-container">
              <p>Pick a hoodie color.</p>
              <SketchPicker
                color={customColor}
                onChangeComplete={handleChangeComplete}
              />
            </div>
            <div className="menu-items-container">
              <div className="menu-close-button-container">
                <div className="menu-close-button" onClick={handleMenuClose}>
                  <AiOutlineCloseCircle />
                </div>
              </div>
              <div className="username-selection-container">
                <div class="input-container">
                  <input
                    type="text"
                    name="name"
                    onChange={onHandleNameInput}
                    value={inputValue}
                    autoComplete="off"
                  />
                  <label for="name">Choose A User Name</label>
                </div>
                <button className="btn" onClick={handleSubmit}>
                  Change
                </button>
                <div className="instructions-menu-container">
                  <h4>Instructions:</h4>
                  <p>Use A, W, S, D to move</p>
                  <p>Click and drag mouse to move camera</p>
                  <p>Space Bar to Jump</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
