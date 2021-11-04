const { default: axios } = require('axios');
const {format_date, format_amount, get_emoji, get_date} = require('../../utils/helpers');



//post message to DB
async function archiveMsg(msg) {

        // const response = await 
        axios.post('http://localhost:3001/api/messages', 
        //   headers: { 'Content-Type': 'application/json' },
          {
            //   user_id: req.session.user_id
              user_id: 1,
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

async function renderMsg(msg,id) {
    axios.get(`http://localhost:3001/api/users/${id}`)
    .then(function (response){
        console.log('response = ',response)
        console.log('msg = ',msg)
        return `${response.username}: ${msg}`
    }).catch((err) => {
        console.log('error = ',err)
    });
}

module.exports = {archiveMsg, renderMsg}