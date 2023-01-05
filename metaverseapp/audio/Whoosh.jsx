import { Howl } from "howler";
// import whoosh1 from "/sounds/whoosh1.mp3";

export const playSound = () => {
  console.log("click me");

  var sound = new Howl({
    src: "/sounds/whoosh3.mp3",
    volume: 0.1,
    loop: true,
  });

  sound.play();
};
