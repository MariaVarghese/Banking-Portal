const express = require('express');
const data = require('../data.js');

const router = express.Router();

const accounts = data.accounts;

router.get('/savings', function(req, res) {
  res.render('account', {
    account: accounts.savings
  });
});

router.get('/checking', function(req, res) {
  res.render('account', {
    account: accounts.checking
  });
});

router.get('/credit', function(req, res) {
  res.render('account', {
    account: accounts.credit
  });
});

module.exports = router;
