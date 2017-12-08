const OAuth = require("oauth");
const request = require("request");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1"
);
function twitson(account, callback) {
  const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";
  oauth.get(url + account, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET,function (error, data) {
    if (error) {
      console.log(error);
    }
    else {
      const text = JSON.parse(data).map((tweet) => {
        return tweet.text;
      });
      text.map((tweet) => {
        return callback(tweet);
      });
    }
  });
}
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const urlWatson = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

function watsonEmotion(text) {
  const uri = encodeURI(urlWatson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=fr&text=" + text);
  request({
    url: uri,
    headers: { "Authorization": auth }
  },
  function (error, response, body) {
    const emotions = JSON.parse(body).sentiment.document.label;
    console.log(text);
    console.log(emotions);
    console.log("\n");
  }
  );
}
twitson("Decathlon", watsonEmotion);
