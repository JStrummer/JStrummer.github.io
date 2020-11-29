'use strict'

function resize () {
  var appContainer = document.querySelector('#app');
  var header = document.querySelector('#header');
  var calendarContainer = document.querySelector('#calendar-container');
  // sizing heights
  appContainer.style.height = `${window.innerHeight}px`;
  header.style.height = `${window.innerHeight * 0.15}px`;
  calendarContainer.style.height = `${window.innerHeight * 0.85}px`;

  // sizing canvas
  var background = document.querySelector('#background');
  background.width = calendarContainer.offsetWidth;
  background.height = calendarContainer.offsetHeight;

  // sizing calendar
  var calendar = document.querySelector("#calendar");
  calendar.style.width = `${calendarContainer.offsetWidth * 0.80}px`;
  calendar.style.height = `${calendarContainer.offsetHeight * 0.80}px`;

  // positioning calendar
  calendar.style.top = `${header.offsetHeight + calendarContainer.offsetHeight * 0.10}px`;
  calendar.style.left = `${calendarContainer.offsetWidth * 0.10}px`;
  animBackground()
}
