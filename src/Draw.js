import { getElement } from "../DOMutils.js";
import { getLower } from "./utils.js";

export class Draw {
  /**
   *
   * @param {number} imageName
   */
  constructor(imageName) {
    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas = getElement("puzzle-grid");
    /**
     * @type {CanvasRenderingContext2D}
     */
    // @ts-ignore
    this.ctx = this.canvas.getContext("2d");
    /**
     * @type {HTMLImageElement}
     */
    this.img = new Image();
    /**
     * @type {string}
     */
    this.imageSrc = "images/" + imageName + ".jpeg";
    /**
     * @type {HTMLImageElement}
     */
    this.frame = new Image();
    /**
     * @type {string}
     */
    this.frame.src = "images/frame.png";
  }

  /**
   *
   * @param {number[]} grid
   */
  init(grid) {
    this.canvas.height = this.canvas.width;
    this.img.addEventListener("load", this.grid.bind(this, grid));
    this.img.src = this.imageSrc;
    //@ts-ignore
    this.canvas.parentNode.style.display = "block";
  }

  /**
   *
   * @param {number[]} grid
   */
  grid(grid) {
    this.reset();

    const n = Math.sqrt(grid.length);
    const imgTileSize = getLower(this.img.width, this.img.height) / n;
    const frameTileSize = getLower(this.frame.width, this.frame.height) / n;
    const tileSize = this.canvas.width / n;

    for (let i = 0; i < grid.length; i++) {
      const tile = grid[i];

      this.ctx.drawImage(
        this.img,
        (tile % n) * imgTileSize,
        Math.floor(tile / n) * imgTileSize,
        imgTileSize,
        imgTileSize,
        (i % n) * tileSize,
        Math.floor(i / n) * tileSize,
        tileSize,
        tileSize
      );

      this.ctx.drawImage(
        this.frame,
        (tile % n) * frameTileSize,
        Math.floor(tile / n) * frameTileSize,
        frameTileSize,
        frameTileSize,
        (i % n) * tileSize,
        Math.floor(i / n) * tileSize,
        tileSize,
        tileSize
      );
    }
  }

  solution() {
    this.reset();

    this.ctx.drawImage(
      this.img,
      0,
      0,
      getLower(this.img.width, this.img.height),
      getLower(this.img.width, this.img.height),
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    this.ctx.drawImage(
      this.frame,
      0,
      0,
      getLower(this.frame.width, this.frame.height),
      getLower(this.frame.width, this.frame.height),
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }

  reset() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
