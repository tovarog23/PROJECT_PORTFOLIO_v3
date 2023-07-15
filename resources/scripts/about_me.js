// IMAGE TRANSITION SHOW:

let newImage = document.getElementById('skillImage');

let imageArray = ['./resources/images/skillset/LA PORTA STEEL.JPG', './resources/images/skillset/CONNECTIONS.PNG', './resources/images/skillset/DISPLACEMENTS.PNG', './resources/images/skillset/DRAKE ARCH.PNG', './resources/images/skillset/DRAKE ARCH 2.PNG', './resources/images/skillset/FAIRFAX CORNERS.jpg', './resources/images/skillset/Image3.png'];
const arrayLength = imageArray.length - 1;
console.log(arrayLength);
let currentImageIndex = 0;

// User Arrow functionality:
const forwardButton = document.getElementsByClassName("forward");
forwardButton.myParam = 'forward';
const backwardButton = document.getElementsByClassName("backward");
backwardButton.myParam = 'backward'

const automaticDisplay = () =>{
  currentImageIndex = (currentImageIndex + 1) % imageArray.length;
  var nextImage = imageArray[currentImageIndex];
  newImage.src = nextImage;
}

const changeSource = (event) =>{
  
  if(event.currentTarget.classList[0] === 'forward'){
    console.log('FORWARD');
    if(currentImageIndex < arrayLength){
      currentImageIndex += 1;  
    }
    else{
      currentImageIndex = 0;
    }
    newImage.src = imageArray[currentImageIndex];
    clearInterval(Timer);
    Timer = setInterval(automaticDisplay, 5000);

  }  
  else if(event.currentTarget.classList[0]=== 'backward'){
    console.log('BACKWARD');
    console.log(currentImageIndex);
    if(currentImageIndex >= 1){
      currentImageIndex = currentImageIndex - 1;
    }
    else{
      currentImageIndex = (arrayLength)  
    }
    console.log(currentImageIndex);
    newImage.src = imageArray[currentImageIndex];
    clearInterval(Timer);
    Timer = setInterval(automaticDisplay, 5000);
  }

}

let Timer = setInterval(automaticDisplay, 4000);

forwardButton[0].addEventListener('click', changeSource);
backwardButton[0].addEventListener('click', changeSource);






