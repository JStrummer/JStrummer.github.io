'use strict'

function box (element, date) {
  var date = new Date(2020, 10, date);
  var day = date.getDate();
  var isOpen = false;
  var isLocked = true;
  var gift = gifts.get(day);
  element.dataset.date = day;
  // setting image for the date
  var dateImage = document.createElement('img');
  dateImage.src = "graphic/img/dates/" + day + ".png";
  dateImage.classList.add('date');
  // setting image for the gift when box is open
  var previewGift = document.createElement('img');
  previewGift.classList.add('previewGift');
  previewGift.src = gift.preview;

  element.appendChild(dateImage);
  element.appendChild(previewGift);

  return {
    get gift () {
      return gift;
    },
    get isOpen () {
      return isOpen;
    },
    get isLocked () {
      return isLocked;
    },
    get date() {
      return date;
    },
    get element () {
      return element;
    },
    unlock () {
      if (isLocked && checkDate()) {
        isLocked = false;
        this.element.classList.add('unlocked');
        this.element.addEventListener('click', openBox);
        return true;
      }
      return false;
      // check if you can open the box
      function checkDate () {
        if (Date.now() >= date) {
          return true;
        } else {
          return false;
        }
      }
    },
    open () {
      if (!isLocked && !isOpen) {
        isOpen = true;
        this.element.classList.add('open');
        this.element.classList.remove('unlocked');
        // change image to show the gift
        dateImage.style.display = 'none';
        previewGift.classList.add('show');
        this.element.removeEventListener('click', openBox);
        this.element.addEventListener('click', openGift);
        return true;
      }
      return false;
    }
  }
}
