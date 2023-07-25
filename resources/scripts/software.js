// Projects Menu:
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






