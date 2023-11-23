/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 */
export function range(min, max) {
  const result = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function shuffleArray(array) {
  let source = [...array];
  const result = [];

  while (source.length > 0) {
    const index = randomIndex(source);
    result.push(source[index]);

    source = source.filter((el, i) => i !== index);
  }

  return result;

  /**
   *
   * @param {any[]} array
   * @returns {number}
   */
  function randomIndex(array) {
    return Math.floor(Math.random() * (array.length - 1));
  }
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function swapFirstTwo(array) {
  return swapTwo(array, 0, 1);
}

/**
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function swapLastTwo(array) {
  return swapTwo(array, array.length - 1, array.length - 2);
}

/**
 * @template T
 * @param {T[]} array
 * @param {number} firstIndex
 * @param {number} secondIndex
 * @returns {T[]}
 */
export function swapTwo(array, firstIndex, secondIndex) {
  const result = [...array];

  if (isDef(array[firstIndex]) && isDef(array[secondIndex])) {
    result[firstIndex] = array[secondIndex];
    result[secondIndex] = array[firstIndex];
  }

  return result;
}

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
export function isEven(number) {
  return number === 0 || number % 2 === 0;
}

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
export function isOdd(number) {
  return !isEven(number);
}

/**
 * if a === b return b
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns
 */
export function getLower(a, b) {
  return a < b ? a : b;
}

/**
 *
 * @param {any} v
 * @returns {boolean}
 */
export function isUndefined(v) {
  return v === undefined;
}

/**
 *
 * @param {any} v
 * @returns {boolean}
 */
export function isDef(v) {
  return not(isUndefined)(v);
}

/**
 *
 * @param {any} v
 * @returns {boolean}
 */
export function isNull(v) {
  return v === null;
}

/**
 * @template T
 * @param {(args:T)=>boolean} fn
 * @returns {(args:T)=>boolean}
 */
export function not(fn) {
  return function negate(...args) {
    return !fn(...args);
  };
}

/**
 *
 * @param {MouseEvent} event
 * @returns {{x:number,y:number}}
 */
export function getCoord(event) {
  return { x: event.offsetX, y: event.offsetY };
}

/**
 *
 * @param {Touch} touch
 * @returns {{x:number,y:number}}
 */
export function getTouchCoord(touch) {
  return { x: touch.screenX, y: touch.screenY };
}
