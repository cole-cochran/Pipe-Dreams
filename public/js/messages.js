const { default: axios } = require('axios');
const {format_date, format_amount, get_emoji, get_date} = require('../../utils/helpers');


//post message to DB
async function archiveMsg(msg) {

        // const response = await 
        axios.post('http://localhost:3001/api/messages', 
        //   headers: { 'Content-Type': 'application/json' },
          {
              user_id: 1,
              text: msg,
          }
        ).then(function(response){
            console.log('response = ',response)
        }).catch((err) => {
            console.log('error = ',err)
        });
      
    //     if (response.ok) {
    //     //   document.location.replace('/');
    //     console.log('message archived')
    //     } else {
    //       alert(response.statusText);
    //     }
    //   ;
      
}


async function renderMsg() {
    axios.get('http://localhost:3001/api/messages').then(function(response){
        console.log('response = ',response)
    }).catch((err) => {
        console.log('error = ',err)
    });
    // const response = await fetch('/api/messages', {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    
    //   if (response.ok) {
    //   //   document.location.replace('/');
    // //   console.log('message archived')
    //   } else {
    //     alert(response.statusText);
    //   }
    // ;

}

module.exports = {archiveMsg, renderMsg}