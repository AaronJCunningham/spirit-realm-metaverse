import io from "socket.io-client";

const socket = io("ws://srbackend-production.up.railway.app");
console.log("socket", socket);
export default socket;
