'use strict'


if (state) {
  boxes.forEach((box, i) => {
    box.unlock();
    if (state[i].open) {
      box.open();
      box.element.removeEventListener('click', openBox);
      box.element.addEventListener('click', openGift);
    }
  });
}

updateTimer();
resize();
window.onresize = resize;
