const router = require('express').Router();
const withAuth = require('../utils/auth');
const path = require('path')
const Message = require('../models/Message')
// const { Message, User } = require('../models');
// const UserHistory = require(../models/User_history);

// homepage route
router.get('/', async (req, res) => {
    try {
        const dbMessageData = await Message.findAll({});
    
        const messages = dbMessageData.map((message) =>
          message.get({ plain: true })
        );
        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('homepage', {
          messages,
          logged_in: req.session.loggedIn,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

// login or sign up route
router.get('/loginSignUp', (req, res) => {
    res.render('loginorsignup');
    // res.sendFile(path.join(__dirname,'../loginorsignup.html'));
});
// sign-up route
router.get('/signup', (req, res) => {
    res.render('sign-up');
    // res.sendFile(path.join(__dirname,'../sign-up.html'));
});

// login route
router.get('/login', (req, res) => {
    res.render('login');
    // res.sendFile(path.join(__dirname,'../login.html'));
});

// chat route - sends logged in user to chat, others to signup/login
// router.get('/chat', (req, res) => {
//     if (req.session.logged_in) {
//         res.sendFile(__dirname + '/chat.html');
//         return;
//     } else {
//         res.redirect('/userpage.html');
//     }
// });

// sends logged in user to mapbox
// sends other users to login or sign up page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('../public/mapbox.html');
        return;
    } else {
        res.sendFile(__dirname + '/userpage.html');
    }
});

// allows access to mapbox if signed in already
router.get('/mapbox', withAuth, (req, res) => {
    res.render('mapbox')
    // res.sendFile(path.join(__dirname,'../public/mapbox.html'));
});

// redirects mapbox access to login or signup if not logged in
router.get('/mapbox', (req, res) => {
    res.render('loginorsignup')
    // res.sendFile(__dirname + '/userpage.html');
});



module.exports = router;


