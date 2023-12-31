const fs = require('fs');
const path = require('path');
const express = require('express');
const { accounts, users, writeJSON } = require('./data.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

const accountRoutes = require('./routes/accounts.js');
app.use('/account', accountRoutes);
const servicesRoutes = require('./routes/services.js');
app.use('/services', servicesRoutes);

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Account Summary',
    accounts: accounts
  });
});

app.get('/profile', function(req, res) {
  res.render('profile', {
    user: users[0]
  })
});

app.listen(3000, () => {
  console.log('PS Project Running on port 3000');
});
