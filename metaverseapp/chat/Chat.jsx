import { useEffect } from 'react';
import { useState } from 'react';
import socket from '../socketUtlities/socketConnection';
import { useChatFocus } from '../store/store';

export const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [chat, setChat] = useState('');
  const [remoteData, setRemoteData] = useState([{ x: 0, y: 0, z: 0, id: 'iug' }]);
  const [input, setInput] = useState('');

  const [old, setOld] = useState([]);

  const [chatFocus, setChatFocus] = useChatFocus((state) => [state.chatFocus, state.setChatFocus]);

  useEffect(() => {
    socket.on('chat', (data) => {
      setChat(data);
    });
  }, []);

  const id = socket.id;

  useEffect(() => {
    setOld((prev) => [chat.message, ...prev]);
  }, [chat]);

  const oldChats = old.filter((x) => {
    return x !== undefined;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    socket.emit('chat', { id: id, message: input });
    const el = document.getElementById('chat');
    el.blur();
    setInput('');
  };

  // note

  return (
    <div className="chat_container">
      <div className="chat_tab" onClick={() => setShowChat(!showChat)}>
        Chat
      </div>
      {showChat && (
        <div className="chat_bg">
          {oldChats
            .slice(0, 5)
            .reverse()
            .map((chat, index) => {
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
                onBlur={() => setChatFocus(false)}></input>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
