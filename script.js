// calc
let oyna = document.querySelector(".oyna");
let clr = document.querySelector(".ac");
let kupaytriw = document.querySelector(".plusAyrish");
let foiz = document.querySelector(".foiz");
let bolish = document.querySelector(".bolish");
let qoshish = document.querySelector(".qoshish");
let ayrish = document.querySelector(".ayrish");
let item7 = document.querySelector(".item7");
let item8 = document.querySelector(".item8");
let item9 = document.querySelector(".item9");
let kupaytirish = document.querySelector(".kopaytirish");
let item4 = document.querySelector(".item4");
let item3 = document.querySelector(".item3");
let item2 = document.querySelector(".item2");
let item1 = document.querySelector(".item1");
let item0 = document.querySelector(".item0");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let itemNuqta = document.querySelector(".itemnuqta");
let javob = document.querySelector(".jabob");
let oynaArr = [];
function oynaFun() {
  let oynaraqam = oynaArr.join("");
  oyna.textContent = oynaraqam;
}
// item0.addEventListener("click", function () {
//   oyna.textContent = "0";

// });

item0.addEventListener("click", () => {
  oynaArr.push("0");
  oynaFun();
});
item1.addEventListener("click", () => {
  oynaArr.push("1");
  oynaFun();
});
item2.addEventListener("click", () => {
  oynaArr.push("2");
  oynaFun();
});
item3.addEventListener("click", () => {
  oynaArr.push("3");
  oynaFun();
});
item4.addEventListener("click", () => {
  oynaArr.push("4");
  oynaFun();
});
item5.addEventListener("click", () => {
  oynaArr.push("5");
  oynaFun();
});
item6.addEventListener("click", () => {
  oynaArr.push("6");
  oynaFun();
});
item7.addEventListener("click", () => {
  oynaArr.push("7");
  oynaFun();
});
item8.addEventListener("click", () => {
  oynaArr.push("8");
  oynaFun();
});
item9.addEventListener("click", () => {
  oynaArr.push("9");
  oynaFun();
});
itemNuqta.addEventListener("click", () => {
  oynaArr.push(".");
  oynaFun();
});
qoshish.addEventListener("click", () => {
  oynaArr.push("+");
  oynaFun();
});
javob.addEventListener("click", () => {
  oynaArr.push("=");
  oynaFun();
});
bolish.addEventListener("click", () => {
  oynaArr.push("/");
  oynaFun();
});
ayrish.addEventListener("click", () => {
  oynaArr.push("-");
  oynaFun();
});
kupaytirish.addEventListener("click", () => {
  oynaArr.push("*");
  oynaFun();
});
itemNuqta.addEventListener("click", () => {
  oynaArr.push("*");
  oynaFun();
});
