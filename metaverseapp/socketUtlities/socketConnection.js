import io from "socket.io-client";

const socket = io("https://srbackend-production.up.railway.app:8080");
console.log("socket", socket);
export default socket;
