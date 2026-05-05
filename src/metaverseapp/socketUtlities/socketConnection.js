import io from "socket.io-client";

const socket = io("ws://be.spiritrealm.art");
console.log("socket", socket);
export default socket;
