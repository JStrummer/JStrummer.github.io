'use strict'

var gifts = new Map();

function showGift () {
  giftContainer.style.display = "block";
  giftImage.src = this.src;
  closeBtn.addEventListener('click', closeGift);
}

function closeGift () {
  giftContainer.style.display = "none";
  closeBtn.removeEventListener('click', closeGift);
}

gifts.set(1, {
  src: "graphic/img/santa.png", show: showGift});
gifts.set(2, {src: "graphic/img/santa.png", show: showGift});
gifts.set(3, {src: "graphic/img/santa.png", show: showGift});
gifts.set(4, {src: "graphic/img/santa.png", show: showGift});
gifts.set(5, {src: "graphic/img/santa.png", show: showGift});
gifts.set(6, {src: "graphic/img/santa.png", show: showGift});
gifts.set(7, {src: "graphic/img/santa.png", show: showGift});
gifts.set(8, {src: "graphic/img/santa.png", show: showGift});
gifts.set(9, {src: "graphic/img/santa.png", show: showGift});
gifts.set(10, {src: "graphic/img/santa.png", show: showGift});
gifts.set(11, {src: "graphic/img/santa.png", show: showGift});
gifts.set(12, {src: "graphic/img/santa.png", show: showGift});
gifts.set(13, {src: "graphic/img/santa.png", show: showGift});
gifts.set(14, {src: "graphic/img/santa.png", show: showGift});
gifts.set(15, {src: "graphic/img/santa.png", show: showGift});
gifts.set(16, {src: "graphic/img/santa.png", show: showGift});
gifts.set(17, {src: "graphic/img/santa.png", show: showGift});
gifts.set(18, {src: "graphic/img/santa.png", show: showGift});
gifts.set(19, {src: "graphic/img/santa.png", show: showGift});
gifts.set(20, {src: "graphic/img/santa.png", show: showGift});
gifts.set(21, {src: "graphic/img/santa.png", show: showGift});
gifts.set(22, {src: "graphic/img/santa.png", show: showGift});
gifts.set(23, {src: "graphic/img/santa.png", show: showGift});
gifts.set(24, {src: "graphic/img/santa.png", show: showGift});

function createModal () {

}
