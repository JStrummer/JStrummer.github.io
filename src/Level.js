import { Draw } from "./Draw.js";
import { Grid } from "./Grid.js";
import { getTouchCoord } from "./utils.js";

export class Level {
  /**
   *
   * @param {number} number
   * @param {number} [tilesNumber]
   */
  constructor(number, tilesNumber = 16) {
    /**
     * @type {number}
     */
    this.number = number;
    /**
     * @type {number}
     */
    this.tilesNumber = tilesNumber;
    /**
     * @type {Grid|null}
     */
    this.tiles = null;
    /**
     * @type {Draw}
     */
    this.draw = new Draw(this.number);
    /**
     * @type {{x:number,y:number}|null}
     */
    this.startMove = null;

    this.init();

    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    // movement must start inside the canvas
    this.draw.canvas.addEventListener("touchstart", this.touchStart.bind(this));
    document.addEventListener("touchend", this.touchEnd.bind(this));
  }

  init() {
    this.tiles = new Grid(this.tilesNumber);
    this.tiles.shuffle();
    this.draw.init(this.tiles.tiles);
  }

  /**
   *
   * @param {number|string} value
   */
  setDifficulty(value) {
    this.tilesNumber = Number(value) * Number(value);
  }

  /**
   *
   * @type {EventListener}
   */
  changeDifficulty(event) {
    /**
     * @type {string}
     */
    //@ts-ignore
    const { difficulty } = event.target.dataset;

    if (difficulty) {
      event.stopPropagation();
      this.setDifficulty(difficulty);
      this.init();
    }
  }

  get won() {
    if (this.tiles) {
      let result = true;
      const solution = this.tiles.tiles;
      for (let i = -1; i < solution.length - 1; i++) {
        if (solution.at(i) !== i) {
          result = false;
          break;
        }
      }

      return result;
    }

    throw new Error("this.tiles is null");
  }

  /**
   *
   * @param {TouchEvent} touch
   */
  touchStart(touch) {
    touch.preventDefault();
    this.startMove = getTouchCoord(touch.changedTouches[0]);
  }

  /**
   *
   * @param {TouchEvent} touch
   */
  touchEnd(touch) {
    if (this.tiles) {
      if (this.startMove !== null) {
        const endMove = getTouchCoord(touch.changedTouches[0]);

        const movements = {
          x: endMove.x - this.startMove.x,
          y: endMove.y - this.startMove.y,
        };

        const movement = greaterAbs(movements);

        if (this.tiles.move(getDirection(movement))) {
          this.draw.grid(this.tiles.tiles);

          if (this.won) {
            const tiles = this.tiles.tiles;
            tiles[tiles.length - 1] = tiles.length - 1;
            this.draw.solution();
          }
        }
      }

      this.startMove = null;
    }

    throw new Error(`this.tiles is null`);

    /**
     *
     * @param {object} coord
     * @param {number} coord.x
     * @param {number} coord.y
     * @returns
     */
    function greaterAbs({ x, y }) {
      return Math.abs(x) > Math.abs(y) ? { x } : { y };
    }

    /**
     * @param {{x:number} | {y:number}} movement
     */
    function getDirection(movement) {
      /**
       * @type {Direction}
       */
      let result;

      const [axis, value] = Object.entries(movement)[0];

      if (axis === "x") {
        /**
         * @type {"right"|"left"}
         */
        result = value > 0 ? "right" : "left";
      } else if (axis === "y") {
        /**
         * @type {"down"|"up"}
         */
        result = value > 0 ? "down" : "up";
      } else {
        throw new Error(`Movement ${movement} don't have x nor y props`);
      }

      return result;
    }
  }

  /**
   *
   * @param {KeyboardEvent} event
   */
  handleKeyPress(event) {
    if (this.tiles) {
      if (/^Arrow/.test(event.key)) {
        /**
         * @type {Direction}
         */
        //@ts-ignore
        const direction = event.key.match(/^Arrow([a-zA-Z]+)/)[1].toLowerCase();
        if (this.tiles.move(direction)) {
          this.draw.grid(this.tiles.tiles);

          if (this.won) {
            const tiles = this.tiles.tiles;
            tiles[tiles.length - 1] = tiles.length - 1;
            this.draw.solution();
          }
        }
      }
    }

    throw new Error(`this.tiles is null`);
  }
}
