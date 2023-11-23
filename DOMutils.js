/**
 * Helper function for type safety and null check
 * @param {string} selector
 * @param {Element} [parentElement]
 * @returns {any}
 */
export function getElement(selector, parentElement) {
  const root = parentElement || document;
  const element = root.querySelector(selector);

  if (element === null) {
    throw new Error(`Cannot find element with selector ${selector}`);
  } else return element;
}

/**
 * Helper function for type safety and null check
 * @param {string} selector
 * @param {Element} [parentElement]
 * @returns {any}
 */
export function getAllElements(selector, parentElement) {
  const root = parentElement || document;
  const nodeList = root.querySelectorAll(selector);

  return nodeList;
}
