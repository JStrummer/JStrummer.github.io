import { XMAS } from "./globals.js";
import { getElement } from "../DOMutils.js";

export function TIMER() {
  const translateMonth = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  // value in milliseconds
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  /**
   *
   * @param {Date} date
   * @returns
   */
  function parseDate(date) {
    const day = date.getDate().toString();
    const month = translateMonth[date.getMonth()];
    const year = date.getFullYear().toString();

    return `${day} ${month} ${year}`;
  }

  /**
   *
   * @param {Date} targetDate
   * @returns
   */
  function timeDifference(targetDate) {
    const difference = Number(targetDate) - Number(Date.now());

    const days = Math.floor(difference / day);
    const hours = Math.floor((difference - days * day) / hour);
    const mins = Math.floor((difference - days * day - hours * hour) / min);
    const seconds = Math.floor(
      (difference - days * day - hours * hour - mins * min) / sec
    );

    return {
      days: days,
      hours: hours,
      mins: mins,
      seconds: seconds,
    };
  }

  function updateTimer() {
    /**
     * @type {HTMLDivElement}
     */
    const currentDate = getElement("#current-date");
    /**
     * @type {HTMLDivElement}
     */
    const countdown = getElement("#countdown");
    currentDate.textContent = parseDate(new Date(Date.now()));
    countdown.textContent = `${timeDifference(XMAS).days} giorni, ${
      timeDifference(XMAS).hours
    } ore,
    ${timeDifference(XMAS).mins} minuti, ${
      timeDifference(XMAS).seconds
    } secondi`;
    requestAnimationFrame(updateTimer);
  }

  return {
    start: updateTimer,
  };
}
