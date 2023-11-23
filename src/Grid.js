import {
  isEven,
  isOdd,
  range,
  shuffleArray,
  swapFirstTwo,
  swapLastTwo,
  swapTwo,
} from "./utils.js";

export class Grid {
  /**
   *
   * @param {number} tilesNumber
   */
  constructor(tilesNumber) {
    /**
     * @type {number[]}
     */
    this.tiles = range(-1, tilesNumber - 2);
    /**
     * @type {number}
     */
    this.width = Math.sqrt(tilesNumber);
  }

  shuffle() {
    let shuffled = shuffleArray(this.tiles);

    if (!this.isSolvable(shuffled)) {
      const emptyTileIndex = shuffled.indexOf(-1);

      if (emptyTileIndex !== 0 && emptyTileIndex !== 1) {
        shuffled = swapFirstTwo(shuffled);
      } else {
        shuffled = swapLastTwo(shuffled);
      }

      if (!this.isSolvable(shuffled)) {
        console.error(`cannot get a solvable puzzle: ${shuffled.toString()}`);
      }
    }

    this.tiles = shuffled;
  }

  /**
   *
   * @param {Direction} direction
   * @returns
   */
  move(direction) {
    const emptyTileIndex = this.tiles.indexOf(-1);
    const nextTileIndex = emptyTileIndex + getNext(direction, this.width);

    if (
      emptyTileIndex === -1 ||
      ((direction === "right" || direction === "left") &&
        this.getRow(emptyTileIndex) !== this.getRow(nextTileIndex))
    ) {
      return false;
    }

    this.tiles = swapTwo(this.tiles, emptyTileIndex, nextTileIndex);

    return true;

    /**
     *
     * @param {Direction} direction
     * @param {number} width
     */
    function getNext(direction, width) {
      const nextIndex = {
        right: -1,
        left: 1,
        up: width,
        down: width * -1,
      };
      return nextIndex[direction];
    }
  }

  /**
   *
   * @param {number[]} array
   * @returns
   */
  isSolvable(array) {
    if (isOdd(this.width)) {
      return isEven(countInversions(array));
    } else {
      const row = this.getRow(array.indexOf(-1));
      const rowFromBottom = this.width - row;

      if (isOdd(rowFromBottom)) {
        return isEven(countInversions(array));
      } else {
        return isOdd(countInversions(array));
      }
    }

    /**
     *
     * @param {number[]} array
     */
    function countInversions(array) {
      // https://developerslogblog.wordpress.com/2020/04/01/how-to-shuffle-an-slide-puzzle/
      let result = 0;

      for (let i = 0; i < array.length; i++) {
        const current = array[i];

        if (current !== undefined && current >= 0) {
          // skip empty element (-1)
          for (let j = i + 1; j < array.length; j++) {
            const next = array[j];

            if (next !== undefined && next >= 0 && current > next) {
              result++;
            }
          }
        }
      }

      return result;
    }
  }

  /**
   *
   * @param {number} tileIndex
   */
  getRow(tileIndex) {
    return Math.floor(tileIndex / this.width);
  }
}
