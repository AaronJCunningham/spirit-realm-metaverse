import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";

import { BsTwitter, BsDiscord, BsYoutube } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

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

  const handleSocial = () => {
    setShow(false);
    gsap.to(circleRef.current, { r: 0 });
    useMenu.setState({ menu: false });
  };

  return (
    <>
      <div className="menu-button-container">
        <button className="menu_button_fixed" onClick={handleMenuOpen}>
          {show ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
        </button>
      </div>
      {show ? (
        <div className="menu_container">
          <ul className="menu_main_list">
            <li
              onClick={() => handleLink("/")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#71797E" })
              }
            >
              SHILOH
            </li>

            <li
              onClick={() => handleLink("/metaverse")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#A9A9A9" })
              }
            >
              SPIRIT REALM <sup>BETA</sup>
            </li>
            <li
              onClick={() => handleLink("/movie")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#808080" })
              }
            >
              MOVIE
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
              onClick={() => handleLink("/about")}
              onMouseEnter={() =>
                gsap.to(circleRef.current, { fill: "#C0C0C0" })
              }
            >
              ABOUT
            </li>
            <li>
              <div
                className="social-menu-container"
                onClick={handleSocial}
                onMouseEnter={() =>
                  gsap.to(circleRef.current, { fill: "#808080" })
                }
              >
                <a
                  className="a-menu"
                  href="https://twitter.com/shiloh_spirit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter />
                </a>
                <a
                  className="a-menu"
                  href="https://discord.gg/Th8WjmbESZ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiDiscord />
                </a>
                <a
                  className="a-menu"
                  href="youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsYoutube />
                </a>
              </div>
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
