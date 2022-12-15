import io from "socket.io-client";

const socket = io("ws://spirit-realm-backend.herokuapp.com/:8080");
console.log("socket", socket);
export default socket;
