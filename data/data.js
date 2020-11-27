'use strict'

var state = checkData();

function checkData() {
  if (localStorage.getItem('userName')) {
    updateGreetings();
    // retrieve state from localStorage
    return getState(localStorage.getItem('state'));
  }
  return false;
}

submitNameBtn.addEventListener('click', submitName);

function submitName (evt) {
  var name = inputName.value;
  if (name) {
    localStorage.setItem('userName', name);
    // save state to localStorage
    state = saveState();
    localStorage.setItem('state', state);
    updateGreetings();
  }
}

function saveState () {
  var state = [];
  boxes.forEach((box) => {
    let data = {
      open: box.isOpen
    };
    state.push(data);
  });
  return JSON.stringify(state);
}

function getState (state) {
  return JSON.parse(state);
}

function updateGreetings () {
  // customize welcome message
  greetings.textContent = 'Ciao ' + localStorage.getItem('userName') + '!';
  greetings.style.display = "block";
  submitNameForm.style.display = 'none';
}
