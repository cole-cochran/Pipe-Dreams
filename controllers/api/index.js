const router = require('express').Router();
const userRoutes = require('./user');
const messageRoutes = require('./message');
const favoriteRoutes = require('./user-history');

router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/user-history', favoriteRoutes);

module.exports = router;
