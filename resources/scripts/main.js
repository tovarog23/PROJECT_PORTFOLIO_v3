// INDEX SECTION - GREETINGS

let welcome_phrase = document.getElementById("greetings");

const helloList = ["Hello","Bonjour","Hola","Zdravstvuyte","Nǐn hǎo","Salve","Konnichiwa","Guten Tag","Olá","Anyoung haseyo","Asalaam alaikum","Goddag","Shikamoo","Goedendag","Yassas","Dzień dobry","Selamat siang","God dag","Merhaba","Shalom","God dag"];

let currentTextIndex = 0;
console.log(helloList.length);
const changeGreetings = () =>{
    console.log('ITERATION');
    console.log(currentTextIndex);
    currentTextIndex = (currentTextIndex + 1) % helloList.length;
    console.log(currentTextIndex);
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










