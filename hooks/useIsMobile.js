import { useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    setIsMobile(true);
  }

  return isMobile;
};
