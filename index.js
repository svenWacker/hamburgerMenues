const menuBtn1 = document.querySelector(".burger1");
let menuOpen1 = false;
menuBtn1.addEventListener("click", () => {
  if (!menuOpen1) {
    menuBtn1.classList.add("open1");
    menuOpen1 = true;
  } else {
    menuBtn1.classList.remove("open1");
    menuOpen1 = false;
  }
});
const menuBtn2 = document.querySelector(".burger2");
let menuOpen2 = false;
menuBtn2.addEventListener("click", () => {
  if (!menuOpen2) {
    menuBtn2.classList.add("open2");
    menuOpen2 = true;
  } else {
    menuBtn2.classList.remove("open2");
    menuOpen2 = false;
  }
});
const menuBtn3 = document.querySelector(".burger3");
let menuOpen3 = false;
menuBtn3.addEventListener("click", () => {
  if (!menuOpen3) {
    menuBtn3.classList.add("open3");
    menuOpen3 = true;
  } else {
    menuBtn3.classList.remove("open3");
    menuOpen3 = false;
  }
});
const menuBtnHeart = document.querySelector(".heart");
let menuOpenHeart = false;
menuBtnHeart.addEventListener("click", () => {
  if (!menuOpenHeart) {
    menuBtnHeart.classList.add("openHeart");
    menuOpenHeart = true;
  } else {
    menuBtnHeart.classList.remove("openHeart");
    menuOpenHeart = false;
  }
});
