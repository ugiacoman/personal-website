---
title: Notify yourself
date: "2017-01-26T22:40:32.169Z"
layout: post
path: "/notify-yourself/"
---

Notifications are everywhere and you're probably ignoring most of them. 
What if we could control our notifications? Instead of subscribing to the blanket that is the 
internet, we instead plug in our own observers that will notify us about the events that matter.

If you use Slack, then you probably have used a slack integration. Integrations can be incredibly robust
because of Slack's open API. We are going to focus on creating personalized notifications through Slack.
Notifications that you can enable/disable when you don't need them. Best of all, it won't
cost you a dime. The Slack API lets us send messages to channels and users. Combine their API with your smartphone, 
and you'll be sending yourself push notifications for 

## Let's get to it.

In our case, we will be sending ourselves a push notification everytime someone visits our website.

### Creating a Slack Integration 

You'll want a Slack where you have access to adding integrations. 
1. Find your slack domain i.e. `https://slackers.slack.com/`. Where `slackers` is your team name.
2. Navigate to your team's apps and integrations. In general, Slack will host this page at `/apps/build`
i.e. `https://slackers.slack.com/apps/build`
3. From here we'll want to make a `custom integration` and then select `Incoming WebHooks`. 
4. By this step you'll know whether you have access to creating integrations on your team.
5. Confirm by selecting a default channel you'd like to post to (doesn't really matter, you'll be able to post to any). I chose: `Privately to myself`.

<img src="//i.imgur.com/19Ev5bl.png" alt="Slack Integration Confirmation" width="650" height="203.25"/>

Webhooks are exactly what they sound like, a hook on the web. They're little Captain Hooks that will do 
your bidding, when they are called to action. In this case they will intercept our custom message and
post it in our channel. 

### Creating our API

Now that you have created a custom integration, you'll need the Webhook URL to be able to post to your team's Slack.
With that URL, you'll be able to send `POST` requests with directions on where to deliver your payload. This is nice,
but if anyone get's your Webhook URL, they'll be able to post anywhere on your team's slack. So let's add a level of
security, by wrapping it in our own API. This way, we'll be able to use our API on front end clients. If people
do abuse your API, they'll abuse only to the level you've let them. 

You can find the codebase for the API [here](https://github.com/ugiacoman/notification-api/blob/master/index.js).
Full instructions on how to deploy using Heroku can be found in the `README.md`. Below, I will explain the codebase.

#### Micro + Heroku
We'll use two tools to create and host our API: Micro + Heroku. Micro will allow us to create a minamalist
API (micro-service), without any overhead. Heroku lets us deploy effortlessly and gives us a server where we can host our API.
When using Heroku free tier, your API will go to sleep during inactivity. However, this is ok because the request will still go through.
Keep this in mind if you need realtime notifications. If your API goes to sleep, the first request will be slow to respond, but then will
behave normally. 

#### The Wrapper
Our API will wrap the Slack Webhook. We'll open access to the username, user icon, and message. We'll hardcode the channel so that your Slack team doesn't
get spammed. Now we want to simplify access to the Slack API, so we'll be creating a `GET` endpoint and use URL query parameters to configure our messages.
Let's start off by parsing the query into our payload object. We'll parse the query using `url` and use environment variables (`process.env.CHANNEL`) 
to set the channel to which to post to. Remember this can be a channel (`#general`) or a user (`@uli`). We are setting these variables in our `.env` file.

```env
# .env

SLACK_URL=https://hooks.slack.com/services/blahblahblacksheep
CHANNEL=#general
```

```js
// index.js

const { parse } = require('url')
require('dotenv').config()

const { query } = parse(request.url, true)

var payload = { 'channel': process.env.CHANNEL,
                'username': query.username,
                'text': query.text,
                'icon_emoji': ':' + query.emoji + ':'
                }
```

#### Sending our request

Our Slack Webhook accepts `form-urlencoded` parameters. These parameters are of key-value type, specifically it expects a parameter `payload` with
the value of a `JSON` object. This object contains our message options (channel, username, etc..).
We'll use `isomorphic-fetch` to send our `GET` request to our API. We are using `await` to not block up the main thread and making this request asynchronous.
Our `await`, will wait for the `promise` to go through. Promises capture the idea that we'll eventually get value back and that it might not be immediately. 
Then we'll store the response and return it. In our case, the response will let us know if there is an error in posting to Slack. 

```js
// index.js

const fetch = require('isomorphic-fetch')

const formBody = ['payload=' + JSON.stringify(payload)]

const response = await fetch(process.env.SLACK_URL, {
                            method: "POST",
                            headers: {
                              "cache-control": "no-cache",
                              "content-type": "application/x-www-form-urlencoded"
                            },    
                            body: formBody
                            })
                            .then(function(response) {
                              return response.text()
                            }, function(error) {
                              return 'Couldn\'t reach slack, check if you configured your .env file correctly.'
                            })
return response
```

#### Exporting and Usage

Our full API, we didn't cover `module.exports`. By exporting, we are telling `micro` to use this code as our endpoint.

```js
const { parse } = require('url')
const fetch = require('isomorphic-fetch')
require('dotenv').config()

module.exports = async request => {
  const { query } = parse(request.url, true)

  var payload = { 'channel': process.env.CHANNEL,
                    'username': query.username,
                    'text': query.text,
                    'icon_emoji': ':' + query.emoji + ':'
                  }
  const formBody = ['payload=' + JSON.stringify(payload)]

  const response = await fetch(process.env.SLACK_URL, {
                                method: "POST",
                                headers: {
                                  "cache-control": "no-cache",
                                  "content-type": "application/x-www-form-urlencoded"
                                },    
                                body: formBody
                                })
                              .then(function(response) {
                                return response.text()
                              }, function(error) {
                                return 'Couldn\'t reach slack, check if you configured your .env file correctly.'
                              })
  return response


```

We can now post messages to your Slack by simply hitting our endpoint, i.e. `//host.com/?username=Uli%20bot&text=hiya%20people&emoji=partyparrot`.

### Use Cases

Now you can embed this request into any page, such as your personal website, and you'll get notified! Make sure you have Slack push notifications enabled :)

Stay tuned for building minimal iOS crash reporting by using our micro-service above.