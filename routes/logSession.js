var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var LogSession = require('../models/logSession.js');

router.get('/', function(req, res, next) {
  LogSession.find(function(err, sessions) {
    if(err) return next(err);
    res.json(sessions);
  });
});

router.post('/', function(req, res, next) {
  const newSession = new LogSession(req.body);
  console.log("New session: ", newSession);
  LogSession.create(newSession, function(err, session) {
    if(err) {
      res.json(err);
    } else {
      res.json(session);
    }
  });
});

module.exports = router;
