import { useEffect } from "react";
import { useState } from "react";
import socket from "../socketUtlities/socketConnection";
import { useChatFocus, useCustomName } from "../store/MetaStore";

export const Chat = ({ loaded }) => {
  const [showChat, setShowChat] = useState(true);
  const [chat, setChat] = useState([]);
  const [remoteData, setRemoteData] = useState([
    { x: 0, y: 0, z: 0, id: "iug" },
  ]);
  const [input, setInput] = useState("");

  const [old, setOld] = useState([]);

  const [chatFocus, setChatFocus] = useChatFocus((state) => [
    state.chatFocus,
    state.setChatFocus,
  ]);

  const [userName, setUserName] = useCustomName((state) => [
    state.userName,
    state.setUserName,
  ]);

  useEffect(() => {
    socket.on("chat", (data) => {
      setChat(data.chatArray.array);
      console.log("chat data", data);
    });
  }, []);

  const id = socket.id;

  useEffect(() => {
    setOld((prev) => [chat.message, ...prev]);
  }, [chat]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      message: `${userName ? userName : "Shiloh"}: ${input}`,
    });
    const el = document.getElementById("chat");
    el.blur();
    setInput("");
  };

  // note

  return loaded ? (
    <div className="chat_container">
      <div className="chat_tab" onClick={() => setShowChat(!showChat)}>
        Chat
      </div>
      {showChat && (
        <div className="chat_bg">
          {chat.map((chat, index) => {
            return (
              <div className="individual_chat" key={index}>
                {chat}
              </div>
            );
          })}
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="chat_enter"
                id="chat"
                type="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setChatFocus(true)}
                onBlur={() => setChatFocus(false)}
              ></input>
            </form>
          </div>
        </div>
      )}
    </div>
  ) : null;
};
