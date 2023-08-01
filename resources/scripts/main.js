// INDEX SECTION - GREETINGS

let welcome_phrase = document.getElementById("greetings");

const helloList = ["Hello","Konnichiwa","Hola","Kia Ora","Nǐn hǎo","Salve","Konnichiwa","Guten Tag","Olá","Goddag","Shikamoo","Goedendag","Yassas","Merhaba","Shalom"];
let currentTextIndex = 0;
const changeGreetings = () =>{
    currentTextIndex = (currentTextIndex + 1) % helloList.length;
    var nextGreeting = helloList[currentTextIndex];
    welcome_phrase.innerHTML = nextGreeting;
}

setInterval(changeGreetings, 5000);

// OVERLAY MENU FUNCTIONALITY:

const openNav = () =>{
    document.getElementById("myNav").style.width = "100%";
}
  
const closeNav = () =>{
    document.getElementById("myNav").style.width = "0%";
}

let projectButton = document.getElementById("Projects");
projectButton.onclick = openNav;

let exitButton = document.getElementsByClassName("closebtn");
exitButton[0].onclick = closeNav;










