'use strict'

var boxes = [];

//create boxes
for (let i = 1; i < 25; i++) {
  let boxElement = document.createElement("div");
  boxElement.classList.add('box');
  boxes.push(box(boxElement, i));
 }

function openBox (evt) {
  if (state.saved) {
    // open box
    var box = evt.currentTarget;
    var index = box.dataset.date - 1;
    boxes[index].open();

    state.save();

    box.removeEventListener('click', openBox);
    box.addEventListener('click', openGift);
  }
}

function openGift (evt) {
  var box = evt.currentTarget;
  var index = box.dataset.date - 1;
  boxes[index].gift.show();
}
