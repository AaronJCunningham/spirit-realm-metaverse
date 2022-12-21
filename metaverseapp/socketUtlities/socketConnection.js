import io from "socket.io-client";

const socket = io("https://srbackend-production.up.railway.app");
// console.log("socket", socket);
export default socket;
