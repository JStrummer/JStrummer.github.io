'use strict'

var calendar = document.querySelector("#calendar");
var submitNameBtn = document.querySelector('#submitNameBtn');
var inputName = document.querySelector('input#name');
var state = fetchState();

boxes.forEach((box, i) => {
  calendar.appendChild(box.element);
});


if (state.getData()) {
  updateGreetings(state.userName);
  let savedBox = state.saved;
  boxes.forEach( (box, i) => {
    if (box.unlock()) {
      addSound('click', box.element, document.querySelector('#gliss'));
    }

    if (savedBox[i].open) {
      box.open();
    }
  });
} else {
  submitNameBtn.addEventListener('click', submitName);

  function submitName (evt) {
    var name = inputName.value;
    if (name) {
      let data = {userName: name};
      localStorage.setItem('state', JSON.stringify(data));
      state.getData();
      state.save();
      updateGreetings(state.userName);
      submitNameBtn.removeEventListener('click', submitName);
      boxes.forEach( (box) => {
        if (box.unlock()) {
          addSound('click', box.element, document.querySelector('#gliss'));
        }
      });
    }
  }
}

updateTimer();
resize();
window.onresize = resize;
