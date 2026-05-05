import { useEffect } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

export const CookieAccept = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Sure man!!"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#23a6d5" }}
      buttonStyle={{ color: "#FFA800", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
