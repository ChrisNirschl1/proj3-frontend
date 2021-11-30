const path = require('path');
const express = require('express');
const session = require('express-session');
require('dotenv').config();

const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const sesh = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sesh));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Tuned into Port '+PORT));
  });
  