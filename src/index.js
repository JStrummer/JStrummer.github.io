import { not, isNull, isDef } from "./utils.js";
import { getAllElements, getElement } from "../DOMutils.js";
import { HOME, PUZZLE } from "./globals.js";
import { initHome } from "./home.js";
import { Level } from "./Level.js";

/**
 * @type {Level|null}
 */
let level = null;

/**
 * @type {EventListener|undefined}
 */
let changeDifficultyHandler;
window.addEventListener("load", (event) => {
  initHome();
  goToHome();
});

/**
 * @type {HTMLButtonElement}
 */
const homeButton = getElement("#home-button");
homeButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  goToHome();
});

/**
 * @type {HTMLButtonElement}
 */
const restartButton = getElement("#restart-button");
restartButton.addEventListener("click", () => level?.init());

document.addEventListener(
  "click",

  (event) => {
    /**
     * @type {{day:string}}
     */
    //@ts-ignore
    const { day } = event.target.dataset;
    //@ts-ignore
    if (isDef(day) && !event.target.classList.contains("blocked")) {
      goToPuzzle(Number(day));
    }
  }
);

function goToHome() {
  HOME.style.display = "block";
  PUZZLE.style.display = "none";

  if (not(isNull)(level)) {
    /**
     * @type {NodeListOf<HTMLButtonElement>}
     */
    const buttons = getAllElements("button.difficulty");

    buttons.forEach((button) => {
      if (changeDifficultyHandler === undefined) {
        throw new Error(`changeDifficultyHandler is null`);
      }
      button.removeEventListener("click", changeDifficultyHandler);
    });

    level = null;
    changeDifficultyHandler = undefined;
  }
}

/**
 *
 * @param {number} day
 */
function goToPuzzle(day) {
  HOME.style.display = "none";
  PUZZLE.style.display = "block";

  level = new Level(day);
  changeDifficultyHandler = level?.changeDifficulty.bind(level);

  /**
   * @type {NodeListOf<HTMLButtonElement>}
   */
  const buttons = getAllElements("button.difficulty");
  buttons.forEach((button) => {
    if (changeDifficultyHandler === undefined) {
      throw new Error(`changeDifficultyHandler is null`);
    }
    button.addEventListener("click", changeDifficultyHandler);
  });
}
