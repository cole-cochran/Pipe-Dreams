const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const {archiveMsg, renderMsg} = require('./public/js/messages')
const axios = require('axios').default;
require('dotenv').config();


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));

app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected!');
});

io.on('connection', (socket) => {
  socket.on('chat message', async (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', `${helpers.get_date()}: ${msg}`);
    archiveMsg(msg);
    // renderMsg();

  });
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log('Now listening'));
});


