import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";

import { useMenu } from "../../store";

const Menu = ({ width }) => {
  const [show, setShow] = useState(false);
  const [circleColor, setCircleColor] = useState("#C0C0C0");

  const circleRef = useRef();
  const router = useRouter();
  const { menu } = useMenu();

  const handleMenuOpen = () => {
    setShow(!show);
    useMenu.setState({ menu: !menu });
    gsap.to(circleRef.current, { r: !show ? 3000 : 0 });
  };

  const handleLink = (href) => {
    router.push(href);
    setShow(false);
    gsap.to(circleRef.current, { r: 0 });

    useMenu.setState({ menu: false });
  };

  return (
    <>
      <button className="menu_button_fixed" onClick={handleMenuOpen}>
        {show ? "close" : "menu"}
      </button>
      {show ? (
        <div className="menu_container">
          <ul className="menu_main_list">
            <li
              onClick={() => handleLink("/")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#71797E" })
              }
            >
              HOME
            </li>
            <li
              onClick={() => handleLink("/mint")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#B2BEB5" })
              }
            >
              MINT
            </li>
            <li
              onClick={() => handleLink("/metaverse")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#A9A9A9" })
              }
            >
              METAVERSE
            </li>
            <li
              onClick={() => handleLink("/story")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#808080" })
              }
            >
              STORY
            </li>
            <li
              onClick={() => handleLink("/roadmap")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "D3D3D3" })
              }
            >
              ROADMAP
            </li>
            <li
              onClick={() => handleLink("/about")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#C0C0C0" })
              }
            >
              ABOUT
            </li>
          </ul>
        </div>
      ) : null}

      <div className="circle_menu_container">
        <svg className="svg_circle">
          <circle ref={circleRef} cx="95%" cy="5%" fill={circleColor}></circle>
        </svg>
      </div>
    </>
  );
};

export default Menu;
