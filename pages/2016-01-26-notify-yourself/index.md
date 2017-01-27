---
title: Notify yourself
date: "2017-01-26T22:40:32.169Z"
layout: post
path: "/notify-yourself/"
---

Notifications are everywhere and you're probably ignoring most of them. 
What if we could control our notifications? Instead of subscribing to the blanket that is the 
internet, we instead plug in our own observers that will notify us about the events that matter.

If you use Slack, then you have probably have used or seen a slack integration. Integrations can be incredibly robust
because of Slack's open API. Today, we are going to focus on creating personalized notifications.
Notifications that you can create, you control, and disable when you don't need them. Best of all, it won't
cost you a dime. The Slack API let's us send messages to channels or users. Combine their API with your smartphone, 
and you'll be sending yourself push notifications for remotely any use. 

## Let's get to it.

In our case, we will be sending ourselves a push notification everytime someone visits our website.

### Creating a Slack Integration 

You'll want a Slack where you have access to adding integrations. 
1. Find your slack domain i.e. `https://slackers.slack.com/`. Where `slackers` is your team name.
2. Navigate to your team's apps and integrations. In general, Slack will host this page at `/apps/build`
i.e. `https://slackers.slack.com/apps/build`
3. From here we'll want to make a `custom integration` and then select `Incoming WebHooks`. 
4. By this step you'll know whether you have access to creating integrations on your team.
5. Confirm by selecting a default channel you'd like to post to (doesn't really matter, you'll be able to post to any). I chose to `Privately to myself`.

<img src="//i.imgur.com/19Ev5bl.png" alt="Slack Integration Confirmation"/>


WebHooks are exactly what they sound like, a hook on the web. They're little Captain Hooks that will do 
your bidding, when they are called to action. In this case they will intercept our custom message and
post it in our channel. 

#### Creating our API

Now that you have created a custom integration, you'll need the Webhook URL to be able to post to your team's Slack.
With that URL, you'll be able to send `POST` requests with directions on where to deliver your payload. This is nice,
but if anyone get's your Webhook URL, they'll be able to post anywhere on your team's slack. So let's add a level of
security, by wrapping it in our own API. This way, we'll be able to use our API on front end clients. If people
do abuse your API, they'll abuse only to the level you've let them. 

I've used two tools to create and host my API: Micro + Heroku. Micro will allow us to create a simple minamalist
API, without any overhead. Heroku lets us deploy effortlessly and gives us a server where we can host our API.
It'll go to sleep but that's okay, when it wakes up we'll get the notification.







```js
var s = "JavaScript syntax highlighting";
alert(s);
```
