const router = require('express').Router();
const withAuth = require('../utils/auth');
const path = require('path')
const Message = require('../models/Message')


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
});
// sign-up route
router.get('/signup', (req, res) => {
    res.render('sign-up');
});

// login route
router.get('/login', (req, res) => {
    res.render('login');
});


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
});

// redirects mapbox access to login or signup if not logged in
router.get('/mapbox', (req, res) => {
    res.render('loginorsignup')
});



module.exports = router;