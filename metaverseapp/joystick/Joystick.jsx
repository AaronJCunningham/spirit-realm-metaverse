import React from "react";
import ReactNipple from "react-nipple";
import { useMobileInput } from "../store/MetaStore";

// optional: include the stylesheet somewhere in your app
import "react-nipple/lib/styles.css";
export const MobileControls = () => {
  const [pos, setPos] = useMobileInput((state) => [state.pos, state.setPos]);

  const round = () => {};

  const handleMove = (evt, data) => {
    const { direction, position, angle } = data;

    if (angle) {
      const { radian } = angle;
      console.log(radian);
      if (radian !== 0) {
        if (radian >= 1 && radian <= 2) {
          setPos({ x: 0, y: 1 });
        }
        if (radian >= 2 && radian <= 2.6) {
          setPos({ x: -1, y: 1 });
        }
        if (radian >= 2.6 && radian <= 3.5) {
          setPos({ x: -1, y: 0 });
        }
        if (radian >= 3.5 && radian <= 4.5) {
          setPos({ x: -1, y: -1 });
        }
        if (radian >= 4.5 && radian <= 5.5) {
          setPos({ x: 0, y: -1 });
        }
        if (radian >= 5.5 && radian <= 6.25) {
          setPos({ x: 1, y: 0 });
        }
        if (radian >= 0 && radian <= 0.5) {
          setPos({ x: 1, y: 0 });
        }
        if (radian >= 0.5 && radian <= 1) {
          setPos({ x: 1, y: 1 });
        }
      }
    }
  };

  const handleEnd = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div className="joystick-container">
      <ReactNipple
        // supports all nipplejs options
        // see https://github.com/yoannmoinet/nipplejs#options
        options={{ mode: "static", position: { top: "50%", left: "50%" } }}
        // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
        style={{
          width: 150,
          height: 150,
          // if you pass position: 'relative', you don't need to import the stylesheet
        }}
        // all events supported by nipplejs are available as callbacks
        // see https://github.com/yoannmoinet/nipplejs#start
        onMove={
          handleMove

          // setPos({ x: data.position.x / 650, y: data.position.y / 650 })
        }
        onEnd={handleEnd}
      />
    </div>
  );
};
