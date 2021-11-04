const { default: axios } = require('axios');
const {format_date, format_amount, get_emoji, get_date} = require('../../utils/helpers');
const router = require('../../controllers/api/user');
const session = require('express-session');



//post message to DB
async function archiveMsg(msg) {
    try {
        const messageData = await Message.create({
            user_id: 1,
            text: msg
        });
        res.status(200).json(messageData);
      } catch (err) {
        res.status(400).json(err);
      }
    };



module.exports = {archiveMsg}