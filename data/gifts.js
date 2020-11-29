'use strict'

var gifts = new Map();

gifts.set(1, {
  type: 'image',
  preview: "graphic/img/gifts/selfie_preview.jpg",
  src: "graphic/img/gifts/selfie.gif",
  show: showGift});
  gifts.set(2, {
    type: 'video',
    preview: "graphic/img/santa.png",
    src: "graphic/videos/such_a_wire.mp4",
    show: showGift});
gifts.set(3, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(4, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(5, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(6, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(7, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(8, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(9, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(10, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(11, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(12, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(13, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(14, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(15, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(16, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(17, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(18, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(19, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(20, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(21, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(22, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(23, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(24, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});

function showGift () {
  var giftContainer = document.querySelector('#gift-container');
  var closeBtn = document.querySelector('#close-button');
  var giftImage = document.querySelector('img.gift');
  var giftVideo = document.querySelector('video.gift')

  if (this.type == 'image') {
    giftImage.src = this.src;
    giftImage.style.display = 'block';
    giftVideo.style.display = 'none';
  } else if (this.type == 'video') {
    giftVideo.src = this.src;
    giftVideo.style.display = 'block';
    giftVideo.style.display = 'block';
    giftImage.style.display = 'none';
  }

  giftContainer.style.display = "block";
  closeBtn.addEventListener('click', closeGift);
}

function closeGift () {
  var giftContainer = document.querySelector('#gift-container');
  var closeBtn = document.querySelector('#close-button');
  giftContainer.style.display = "none";
  closeBtn.removeEventListener('click', closeGift);
}
