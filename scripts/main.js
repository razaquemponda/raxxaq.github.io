const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/download.jpg") {
    myImage.setAttribute("src", "images/pic.avif");
  } else {
    myImage.setAttribute("src", "images/download.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `This Is How We Do It, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = ` This Is How We Do It, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This Is How We Do It, ${myName}`;
  }
}

