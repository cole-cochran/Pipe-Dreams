const { default: axios } = require('axios');
const {format_date, format_amount, get_emoji, get_date} = require('../../utils/helpers');
const router = require('../../controllers/api/user');
const session = require('express-session');



//post message to DB
async function archiveMsg(msg) {

        // const response = await 
        axios.post('http://localhost:3001/api/messages', 
        //   headers: { 'Content-Type': 'application/json' },
          {
            //   user_id: req.session.user_id
              user_id: seshUser,
              text: msg,
          }
        ).then(function(response){
            console.log('message archived')
        }).catch((err) => {
            console.log('error = ',err)
        });
}


async function renderMessages() {
    axios.get('http://localhost:3001/api/messages').then(function(response){
        console.log('response = ',response)
    }).catch((err) => {
        console.log('error = ',err)
    });
}

async function renderMsg(msg) {
    
    axios.get(`http://localhost:3001/api/users/${userId}`)
    .then(function (response){
        console.log('response = ',response)
        console.log('msg = ',msg)
        return `${response.username}: ${msg}`
    }).catch((err) => {
        console.log('error = ',err)
    });
}

module.exports = {archiveMsg, renderMsg}