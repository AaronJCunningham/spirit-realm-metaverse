import io from "socket.io-client";

const socket = io("ws://srbackend-production.up.railway.app:8080");
console.log("socket", socket);
export default socket;
