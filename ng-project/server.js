const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require('pusher')
const cors = require('cors')
require('dotenv').config()
const shortId = require('shortid')
const path = require('path')
const crypto = require("crypto")
const dialogFlow = require('./dialogFlow')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: 'us2',
  encrypted: true
})

app.post('/message', async (req, res) => {
  // simulate actual db save with id and createdAt added
  const chat = {
    ...req.body,
    id: shortId.generate(),
    createdAt: new Date().toISOString()
  }
  // trigger this update to our pushers listeners
  pusher.trigger('chat-group', 'chat', chat)

  // check if this message was invoking our bot, /bot
  if (chat.message.startsWith('/bot')) {
    const message = chat.message.split('/bot')[1]
    const response = await dialogFlow.send(message)
    pusher.trigger('chat-group', 'chat', {
      message: `@${chat.displayName} ${
        response.data.result.fulfillment.speech
      }`,
      displayName: 'Bot User',
      email: 'bot@we.com',
      createdAt: new Date().toISOString(),
      id: shortId.generate()
    })
  }

  res.send(chat)
})

app.post('/join', (req, res) => {
  const chat = {
    ...req.body,
    id: shortId.generate(),
    type: 'joined',
    createdAt: new Date().toISOString()
  }
  // trigger this update to our pushers listeners
  pusher.trigger('chat-group', 'chat', chat)
  res.send(chat)
})
//battleship
// to serve our JavaScript, CSS and index.html
app.use(express.static('./dist/botAndPusher/'));

// CORS
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// endpoint for authenticating client
app.post('/pusher/auth', function(req, res) {
  let socketId = req.body.socket_id;
  let channel = req.body.channel_name;
  let presenceData = {
    user_id: crypto.randomBytes(16).toString("hex")
  };
  let auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

// direct all other requests to the built app view
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/botAndPusher/index.html'));
});

//battleship
app.listen(process.env.PORT || 2000, () => console.log('Listening at 2000'))
