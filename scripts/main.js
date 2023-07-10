let myHeading = document.querySelector('h1');

let myImg = document.querySelector('img');
myImg.onclick = function() {
    let myImgSrc = myImg.getAttribute('src');
    if (myImgSrc == "./images/001.jpeg") {
        myImgSrc = "./images/002.jpg";

    } else {
        myImgSrc = "./images/001.jpeg";
    }
    myImg.setAttribute('src', myImgSrc);
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Input your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello " + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello' + storedName;
}

myButton.onclick = function() {
    setUserName();
}