// You might want to store this in an environment variable or something
const axios = require("axios");

const fetchUser = async () => {
  let {
    data: { data },
  } = await axios(
    "https://api.twitter.com/2/tweets/1548036479187685380/retweeted_by",
    {
      headers: {
        Authorization:
          "Bearer TWITTER_BEARER_TOKEN_REMOVED",
      },
    }
  );

  // const test = JSON.parse(twitter_user);
  let retweetObj = data.find((o) => o.username === "whostherplease");
  let retweetBool = typeof retweetObj === "object";

  console.log("res", data, retweetObj, retweetBool);

  return retweetBool;
};
fetchUser();
