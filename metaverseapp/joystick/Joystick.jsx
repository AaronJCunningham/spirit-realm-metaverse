import React from "react";
import ReactNipple from "react-nipple";
import { useMobileInput } from "../store/MetaStore";

// optional: include the stylesheet somewhere in your app
import "react-nipple/lib/styles.css";
export const MobileControls = () => {
  const [pos, setPos] = useMobileInput((state) => [state.pos, state.setPos]);

  const handleMove = (evt, data) => {
    const { direction, position, angle } = data;

    if (angle) {
      const { degree } = angle;
      console.log(data.distance);
      if (degree !== 0) {
        if (degree >= 0 && degree <= 37.5) {
          setPos({ x: 1, y: 0 });
        }
        if (degree >= 322.5 && degree <= 360.01) {
          setPos({ x: 1, y: 0 });
        }
        if (degree >= 37.5 && degree <= 62.5) {
          setPos({ x: 1, y: 1 });
        }
        if (degree >= 62.501 && degree <= 127.5) {
          setPos({ x: 0, y: 1 });
        }
        if (degree >= 127.501 && degree <= 152.5) {
          setPos({ x: -1, y: 1 });
        }
        if (degree >= 152.501 && degree <= 217.5) {
          setPos({ x: -1, y: 0 });
        }
        if (degree >= 217.501 && degree <= 242.5) {
          setPos({ x: -1, y: -1 });
        }
        if (degree >= 242.501 && degree <= 307.5) {
          setPos({ x: 0, y: -1 });
        }
        if (degree >= 307.501 && degree <= 322.5) {
          setPos({ x: 1, y: -1 });
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
          width: 100,
          height: 100,
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
