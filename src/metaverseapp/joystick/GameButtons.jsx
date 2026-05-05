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

      if (degree !== 0) {
        if (degree >= 0 && degree <= 27.5) {
          setPos({ x: 1, y: 0 });
        }
        if (degree >= 332.5 && degree <= 360.01) {
          setPos({ x: 1, y: 0 });
        }
        if (degree >= 27.5 && degree <= 72.5) {
          setPos({ x: 1, y: 1 });
        }
        if (degree >= 72.501 && degree <= 117.5) {
          setPos({ x: 0, y: 1 });
        }
        if (degree >= 117.501 && degree <= 162.5) {
          setPos({ x: -1, y: 1 });
        }
        if (degree >= 162.501 && degree <= 207.5) {
          setPos({ x: -1, y: 0 });
        }
        if (degree >= 207.501 && degree <= 252.5) {
          setPos({ x: -1, y: -1 });
        }
        if (degree >= 252.501 && degree <= 297.5) {
          setPos({ x: 0, y: -1 });
        }
        if (degree >= 297.501 && degree <= 332.5) {
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
