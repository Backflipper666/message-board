var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'How are you?',
    user: 'Sarah',
    added: new Date(),
  },
  {
    text: "I'm doing well, thanks for asking.",
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'What are you up to today?',
    user: 'Sarah',
    added: new Date(),
  },
  {
    text: 'Not much, just hanging out at home.',
    user: 'Amando',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Messageboard', messages });
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
