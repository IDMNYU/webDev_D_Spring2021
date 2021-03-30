console.log("the message!");

// global varialbe are usefull 
// pass the html elements into their own variable
let theBody = document.querySelector('body');

let theButton = document.getElementById('potato');
let theTxt = document.querySelector('h3');
// add an event listener to an element
// and trigger a function when the user does the thing 
theButton.addEventListener('click', myGreatFunction);

function myGreatFunction() {
    console.log("clicked!!");
    theBody.style.backgroundColor = "green";
    //textContent hold the human readable text inside the html element text
    theTxt.textContent = "you pushed the butyton!";


}

//ES6 arrow notation - a new and faster functiuon syntax
document.addEventListener('keydown', theEvent => {
    console.log("you pressed a key!");
})