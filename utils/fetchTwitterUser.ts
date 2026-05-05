import axios from "axios";

interface TwitterUser {
  username: string;
}

const fetchTwitterUser = async (): Promise<boolean> => {
  let {
    data: { data },
  } = await axios<{ data: TwitterUser[] }>(
    "https://api.twitter.com/2/tweets/1548036479187685380/retweeted_by",
    {
      headers: {
        Authorization:
          "Bearer TWITTER_BEARER_TOKEN_REMOVED",
      },
    }
  );

  let retweetObj = data.find((o) => o.username === "whostherplease");
  let retweetBool = typeof retweetObj === "object";

  return retweetBool;
};
fetchTwitterUser();
