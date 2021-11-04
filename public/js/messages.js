const { default: axios } = require('axios');
const {format_date, format_amount, get_emoji, get_date} = require('../../utils/helpers');
const router = require('../../controllers/api/user');
const session = require('express-session');
const Message = require('../../models/Message')



//post message to DB
async function archiveMsg(msg) {
    try {
        const messageData = await Message.create({
            user_id: 1,
            text: msg
        });
        console.log('message archived');
      } catch (err) {
        console.log(err);
      }
    };



module.exports = {archiveMsg}