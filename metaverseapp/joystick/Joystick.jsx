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
      console.log(degree);
      if (degree !== 0) {
        if ((degree >= 0 && degree <= 45) || degree >= 315) {
          setPos({ x: 1, y: 0 });
        }
        if (degree >= 45 && degree <= 135) {
          setPos({ x: 0, y: 1 });
        }
        if (degree >= 135 && degree <= 225) {
          setPos({ x: -1, y: 0 });
        }
        if (degree >= 225 && degree <= 315) {
          setPos({ x: 0, y: -1 });
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
