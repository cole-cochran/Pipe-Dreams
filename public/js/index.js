//event handlers for homepage
// const searchBtn = document.getElementById()
// const histBtn = document.getElementById()
const shareBtn = document.getElementById('share')


shareBtn.addEventListener('click', function(event){
  // console.log('share button clicked')
  const appUrl = document.URL;
  console.log(appUrl);
  navigator.clipboard.writeText(appUrl);
    
  });