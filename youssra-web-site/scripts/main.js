let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/po.jpeg") {
    myImage.setAttribute("src", "images/cosmetics.jpg");
  } else {
    myImage.setAttribute("src", "images/po.jpeg");
  }
});

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Mozilla est cool, " + myName;
  }

  myButton.addEventListener("click", function () {
    setUserName();
  });