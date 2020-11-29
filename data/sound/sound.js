'use strict'

// add sound to buttons
document.querySelectorAll('button').forEach( button => {
  button.addEventListener('click', function sound () {
    var singleBell = document.querySelector('#single-bell');
    singleBell.play();
  })
});

function addSound(evt, target, src) {
  target.addEventListener(evt, function sound () {
    src.play();
  })
}
