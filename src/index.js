"use strict";

let level = null;

calendarImage.addEventListener("load", () => {
  initHome();
  goToHome();
});

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", ev => {
  ev.preventDefault();
  goToHome();
});

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", ev => {
  ev.preventDefault();

  level = new Level(level.number, level.tilesNumber);
});

document.addEventListener("click", ev => {
  let { day } = ev.target.dataset;
  if (isDef(day) && !ev.target.classList.contains("blocked")) {
    goToPuzzle(day);
  }
});

function goToHome() {
  home.style.display = "block";
  puzzle.style.display = "none";

  if (not(isNull)(level)) {
    document.querySelectorAll("button.difficulty").forEach(button => {
      button.removeEventListener("click", level.changeDifficulty.bind(level));
    });

    level = null;
  }
}

function goToPuzzle(day) {
  home.style.display = "none";
  puzzle.style.display = "block";

  level = new Level(day);

  document.querySelectorAll("button.difficulty").forEach(button => {
    button.addEventListener("click", level.changeDifficulty.bind(level));
  });
}
