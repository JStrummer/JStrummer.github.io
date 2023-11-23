import { range } from "./utils.js";
import { getAllElements, getElement } from "../DOMutils.js";
import { CALENDAR_IMAGE } from "./globals.js";
import { timer } from "./timer.js";

export function initHome() {
  /**
   * @type {HTMLDivElement}
   */
  const root = getElement("#calendar-container");

  const sourceStep = CALENDAR_IMAGE.width / 5;
  const TODAY = new Date(Date.now());

  timer().start();
  createBoxes();
  blockFutureDate();
  drawBoxes();

  function createBoxes() {
    range(1, 25).forEach((day) => {
      const canvas = document.createElement("canvas");
      canvas.classList.add("calendar-box");

      canvas.dataset.day = day.toString();
      canvas.width = canvas.height = (root.offsetWidth * 0.95) / 5;

      root.appendChild(canvas);
    });
  }

  function blockFutureDate() {
    const boxes = document.querySelectorAll(".calendar-box");

    boxes.forEach((box) => {
      /**
       * @type {{day:string}}
       */
      //@ts-ignore
      const { day } = box.dataset;
      if (TODAY < new Date(2021, 10, Number(day))) {
        box.classList.add("blocked");
      }
    });
  }

  function drawBoxes() {
    /**
     * @type {NodeListOf<HTMLCanvasElement>}
     */
    const boxes = getAllElements(".calendar-box");

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

        if (box.classList.contains("blocked")) {
          ctx.fillStyle = "rgba(0,0,0,0.8)";
          ctx.fillRect(0, 0, box.width, box.height);
        }
      }
    });
  }
}
