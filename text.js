/* let Heading = document.querySelector("h1");
Heading.textContent = "Hello world!";
console.log("你玩尼玛呢"); */

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "img/images.jpg") {
    myImage.setAttribute("src", "img/下载.jpg");
  } else {
    myImage.setAttribute("src", "img/images.jpg");
  }
};

let myButton = document.querySelector("button");
let myHanding = document.querySelector("h1");
myButton.onclick = function () {
  setUsername();
};
function setUsername() {
  let myName = prompt("请输入你的名字");
  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);
    myHanding.textContent = "Mozilla is cool," + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUsername();
} else {
  let storedName = localStorage.getItem("name");
  myHanding.textContent = "Mozilla 酷毙了，" + storedName;
}
