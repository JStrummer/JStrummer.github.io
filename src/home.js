import { range } from "./utils.js";
import { getElement } from "./DOMutils.js";
import { CALENDAR_IMAGE } from "./globals.js";
import { TIMER } from "./timer.js";

export function initHome() {
  const sourceStep = CALENDAR_IMAGE.width / 5;
  const TODAY = new Date(Date.now());

  /**
   * @type {HTMLDivElement}
   */
  const root = getElement("#calendar-container");

  const boxes = createBoxes();

  blockFutureDate(boxes);
  drawBoxes(boxes);

  boxes.forEach((box) => {
    root.appendChild(box);
  });

  TIMER().start();

  function createBoxes() {
    return range(1, 25).map((day) => {
      const canvas = document.createElement("canvas");
      canvas.classList.add("calendar-box");

      canvas.dataset.day = day.toString();
      return canvas;
    });
  }

  /**
   *
   * @param {HTMLCanvasElement[]} boxes
   */
  function blockFutureDate(boxes) {
    boxes.forEach((box) => {
      /**
       * @type {{day:string}}
       */
      //@ts-ignore
      const { day } = box.dataset;
      if (TODAY < new Date(TODAY.getFullYear(), 11, Number(day))) {
        box.classList.add("blocked");
      }
    });
  }

  /**
   *
   * @param {HTMLCanvasElement[]} boxes
   */
  function drawBoxes(boxes) {
    boxes.forEach((box, index) => {
      const ctx = box.getContext("2d");
      if (ctx !== null) {
        ctx.drawImage(
          CALENDAR_IMAGE,
          (index % 5) * sourceStep,
          Math.floor(index / 5) * sourceStep,
          sourceStep,
          sourceStep,
          0,
          0,
          box.width,
          box.height
        );
      }
    });
  }
}
