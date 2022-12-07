import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { domainName } from "./const/yourDetails";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey:
    "9e413db3f8957217067ee83acecb437d1d0e914bad4d704e0c1c845a2fdbb0df" || "",
  domain: "example.com",
});
