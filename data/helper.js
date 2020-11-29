'use strict'

function updateGreetings (userName) {
  var greetings = document.querySelector('#greetings');
  var submitNameForm = document.querySelector('form');
  // customize welcome message
  greetings.textContent = 'Ciao ' + userName + '!';
  greetings.style.display = "block";
  submitNameForm.style.display = 'none';
}


function degToRad(degrees) {
  return degrees * Math.PI /180;
}
