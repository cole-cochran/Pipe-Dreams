//event handlers for homepage
const shareBtn = document.getElementById('share')


shareBtn.addEventListener('click', function(event){
  // console.log('share button clicked')
  const appUrl = document.URL;
  console.log(appUrl);
  navigator.clipboard.writeText(appUrl);
    
  });