import io from "socket.io-client";

const socket = io("ws://sr-backend-one.vercel.app/:8080");
console.log("socket", socket);
export default socket;
