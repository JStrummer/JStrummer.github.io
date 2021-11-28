"use strict";

class Level {
  constructor(number, tilesNumber = 16) {
    this.number = number;
    this.tilesNumber = tilesNumber;
    this.tiles = null;
    this.draw = new Draw(this.number);
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

  setDifficulty(value) {
    this.tilesNumber = Number(value) * Number(value);
  }

  changeDifficulty(event) {
    let { difficulty } = event.target.dataset;

    if (difficulty) {
      this.setDifficulty(difficulty);
      this.init();
    }
  }

  get won() {
    let result = true;
    let solution = this.tiles.tiles;
    for (let i = -1; i < solution.length - 1; i++) {
      if (solution.at(i) !== i) {
        result = false;
        break;
      }
    }

    return result;
  }

  touchStart(event) {
    event.preventDefault();
    this.startMove = getTouchCoord(event.changedTouches[0]);
  }

  touchEnd(event) {
    if (not(isNull)(this.startMove)) {
      let endMove = getTouchCoord(event.changedTouches[0]);

      let movements = {
        x: endMove.x - this.startMove.x,
        y: endMove.y - this.startMove.y
      };

      let movement = greaterAbs(movements);

      if (this.tiles.move(getDirection(movement))) {
        this.draw.grid(this.tiles.tiles);

        if (this.won) {
          let tiles = this.tiles.tiles;
          tiles[tiles.length - 1] = tiles.length - 1;
          this.draw.solution();
        }
      }
    }

    this.startMove = null;

    function greaterAbs({ x, y }) {
      return Math.abs(x) > Math.abs(y) ? { x } : { y };
    }

    function getDirection(movement) {
      let result;

      let [axis, value] = Object.entries(movement)[0];

      if (axis === "x") {
        result = value > 0 ? "right" : "left";
      } else if (axis === "y") {
        result = value > 0 ? "down" : "up";
      }

      return result;
    }
  }

  handleKeyPress(event) {
    if (/^Arrow/.test(event.key)) {
      let direction = event.key.match(/^Arrow([a-zA-Z]+)/)[1].toLowerCase();
      if (this.tiles.move(direction)) {
        this.draw.grid(this.tiles.tiles);

        if (this.won) {
          let tiles = this.tiles.tiles;
          tiles[tiles.length - 1] = tiles.length - 1;
          this.draw.solution();
        }
      }
    }
  }
}
