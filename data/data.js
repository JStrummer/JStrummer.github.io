'use strict'

function fetchState () {

    var userName = '';
    var saved = null;

  return {
    get userName () {
      return userName;
    },
    get saved () {
      return saved;
    },
    check () {
      if (localStorage.getItem('userName')) {
        updateGreetings(userName);
        // retrieve state from localStorage
        return getState(localStorage.getItem('state'));
      }
      return false;
    },
    getData () {
      let savedData = localStorage.getItem('state');
      if (savedData) {
        let data = JSON.parse(savedData);
        userName = data.userName;
        data.saved ? saved = data.saved : saved;
        return true;
      }
      return false;
    },
    save () {
      if (userName) {
        let data = {userName: userName};
        data.saved = [];
        boxes.forEach( (box) => {
          data.saved.push({open: box.isOpen});
        });
        localStorage.setItem('state', JSON.stringify(data));
        return true;
      }
      return false;
    }
  }
}
