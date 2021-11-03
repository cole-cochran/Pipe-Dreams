const {format_date, format_amount, get_emoji, get_date} = require('../../utils/helpers');

//post message to DB
async function archiveMsg(msg){
    const date = get_date()
    
    
        const response = await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: {
              date: date,
              text: msg,
          }
        });
      
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      ;
      
}

module.exports = {archiveMsg()}