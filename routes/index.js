var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Tony here: Say hello to my little friend!",
    user: 'Tony Montana',
    added: new Date('2019-06-07T18:43:54.000Z')
  },
  {
    text: "Darryl here: This walker doesn't stand a chance.",
    user: 'Daryl Dixon',
    added: new Date('2019-06-10T13:37:38.000Z')
  },
  {
    text: "Walter here: It's not meth, it's chemistry.",
    user: 'Walter White',
    added: new Date('2019-04-27T16:53:20.000Z')
  },
  {
    text: "Jesse here: Heisenberg, we need to get out!",
    user: 'Jesse Pinkman',
    added: new Date('2019-04-27T16:58:03.000Z')
  },
  {
    text: "Hank here: I'm on to you, Heisenberg!",
    user: 'Hank Schrader',
    added: new Date('2019-04-27T17:03:55.000Z')
  },
  {
    text: "Skyler here: Walter, we need to talk about the money.",
    user: 'Skyler White',
    added: new Date('2019-04-27T18:13:05.000Z')
  },
  {
    text: "Jane Margolis here: This is why we don't cook meth.",
    user: 'Jane Margolis',
    added: new Date('2019-04-28T12:37:24.000Z')
  },
  {
    text: "Walter Jr. here: I miss Dad so much...",
    user: 'Walter White, Jr.',
    added: new Date('2019-05-01T18:25:43.000Z')
  },
  {
    text: "Gus here: We must be careful not to leave evidence.",
    user: 'Gustavo Fring',
    added: new Date('2019-05-02T17:14:38.000Z')
  },
  {
    text: "Saul Goodman here: We need to launder that money ASAP!",
    user: 'Saul Goodman',
    added: new Date('2019-05-06T14:23:57.000Z')
  },
  {
    text: "Gomez here: I'm sorry, I couldn't save Hector.",
    user: 'Steven Gómez',
    added: new Date('2019-05-10T23:37:46.000Z')
  },
  {
    text: "Mike here: I'm done cooking meth, time to move on.",
    user: 'Mike Ehrmantraut',
    added: new Date('2019-05-13T07:48:21.000Z')
  },
  {
    text: "Walt Jr.'s Girlfriend here: Walter, please come back.",
    user: 'Sandy',
    added: new Date('2019-05-16T09:37:14.000Z')
  },
  {
    text: "Tuco Salamanca here: You're gonna pay for this, bitch!",
    user: 'Tuco Salamanca',
    added: new Date('2019-05-18T22:43:27.000Z')
  },
  {
    text: "Gretchen here: I'm so glad we got out when we did.",
    user: 'Gretchen Schwartz',
    added: new Date('2019-05-23T16:47:08.000Z')
  },
  {
    text: "Huell here: Man, cooking meth was the worst job I've ever had.",
    user: 'Huell Babineaux',
    added: new Date('2019-05-27T13:08:42.000Z')
  },
  {
    text: "Combo here: We need to find a better way to make money.",
    user: 'Krazy-8',
    added: new Date('2019-06-01T11:53:59.000Z')
  },
  {
    text: "Skinny Pete here: That show was intense, man...",
    user: 'Pete Campbell',
    added: new Date('2019-06-04T21:37:15.000Z')
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form')
})

// New message form POST request
router.post('/new', function(req, res, next) {
  messages.push({user: req.body.name, text: req.body.message, added: new Date()});
  res.redirect('/')
})

module.exports = router;
