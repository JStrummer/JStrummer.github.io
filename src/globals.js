import { getElement } from "../DOMutils.js";

export const XMAS = new Date(new Date().getFullYear(), 11, 25);

/**
 * @type {HTMLImageElement}
 */
export const CALENDAR_IMAGE = getElement("#calendar-source-image");
/**
 * @type {HTMLDivElement}
 */
export const HOME = getElement("#home");
/**
 * @type {HTMLDivElement}
 */
export const PUZZLE = getElement("#puzzle");
