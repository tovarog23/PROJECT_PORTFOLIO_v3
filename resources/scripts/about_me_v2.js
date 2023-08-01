let imageArray = ['./resources/images/skillset/LA PORTA STEEL.JPG', './resources/images/skillset/CONNECTIONS.PNG', './resources/images/skillset/DISPLACEMENTS.PNG', './resources/images/skillset/DRAKE ARCH.PNG', './resources/images/skillset/DRAKE ARCH 2.PNG', './resources/images/skillset/FAIRFAX CORNERS.jpg', './resources/images/skillset/Image3.png'];
let newVar = document.getElementById('slide-left');
let slider = document.getElementById('slide-right');
newVar.style.opacity = 1;

// Function to handle image rotation
function rotateImages() {
    const slideshow = document.querySelector('.images');
    let currentImageIndex = 0;
  
    // Function to show the next image
    function showNextImage() {
      const currentImage = slideshow.querySelector('.active');
      // console.log(currentImage);
      currentImage.classList.remove('active');
      currentImage.classList.add('entering-from-left');
  
      currentImageIndex = (currentImageIndex + 1) % imageArray.length;
      const nextImage = createImageElement(imageArray[currentImageIndex]);
      nextImage.classList.add('entering-from-right');
      slideshow.appendChild(nextImage);
      
      setTimeout(function () {
        currentImage.style.display = 'none';
        currentImage.classList.remove('entering-from-left');
        currentImage.remove();
        nextImage.classList.remove('entering-from-right');
        nextImage.classList.add('active');
      }, 200); // sets the time between each image transition
    }
    
    function showPreviousImage() {
      const currentImage = slideshow.querySelector('.active');
      currentImage.classList.remove('active');
      currentImage.classList.add('entering-from-right');
  
      currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
      const previousImage = createImageElement(imageArray[currentImageIndex]);
      previousImage.classList.add('entering-from-left');
      slideshow.insertBefore(previousImage, currentImage);
  
      setTimeout(function () {
        currentImage.style.display = 'none';
        currentImage.classList.remove('entering-from-right');
        currentImage.remove();
        previousImage.classList.remove('entering-from-left');
        previousImage.classList.add('active');
      }, 200); // sets the time between each image transition
    }
  
    function createImageElement(src) {
      const img = document.createElement('img');
      img.src = src;
      img.style.position = 'absolute';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100%';
      img.style.height = '100%';
      return img;
    }
  
    // Set initial active image
    const initialImage = createImageElement(imageArray[currentImageIndex]);
    initialImage.classList.add('active');
    slideshow.appendChild(initialImage);
    // console.log(initialImage);
  
    // Set interval to automatically change images every 5 seconds
    // setInterval(showNextImage, 5000);
  
    document.getElementById('backward').addEventListener('click', showPreviousImage);
    document.getElementById('forward').addEventListener('click', showNextImage);
}
  
window.addEventListener('load', rotateImages);


// FUNCTIONS FOR PROJECT NAVIGATION OVERLAY
const openNav = () =>{
  document.getElementById("myNav").style.width = "100%";
}

const closeNav = () =>{
  document.getElementById("myNav").style.width = "0%";
}
// FUNCTIONS FOR ELEMENT DISPLAY BASED ON SCROLLING BY USER
const isElementInViewport = (element) =>{
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
const handleScroll = () =>{
  const fadeElements = document.querySelectorAll('.fade-in');
  const slideRightElements = document.querySelectorAll('#slide-right');
  const slideLeftElements = document.querySelectorAll('#slide-left');
  fadeElements.forEach((element)=>{
    if(isElementInViewport(element)){
      element.style.opacity = 1;
    }
  });
  slideRightElements.forEach((element)=>{
    if(isElementInViewport(element)){
      element.style.opacity = 1;
      element.style.transform = 'translateX(0)';
    }
  })
  slideLeftElements.forEach((element)=>{
    if(isElementInViewport(element)){
      // element.style.animation = '1s slideInLeft linear';
      element.style.opacity = 1;
      element.style.transform = 'translateX(0)';
    }
  })
}

let projectButton = document.getElementById("Projects");
projectButton.onclick = openNav;

let exitButton = document.getElementsByClassName("closebtn");
exitButton[0].onclick = closeNav;

let secondProjectButton = document.getElementById('Projects2');
secondProjectButton.onclick = openNav;

let HTMLBody = document.querySelector('body');
HTMLBody.style.overflow = 'none';
let loadingBackground = document.getElementById('loading_background');

// Loading Spinner removal after a specific time to allow resources to load properly  
const removeLoadingSpinner = () =>{
  let loadingSpinner = document.getElementById('loading_bar');
  loadingSpinner.style.display = "none";
  loadingBackground.style.display = 'none';
  // console.log('LOADING SPINNER IS OFF NOW');
  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
  HTMLBody.style.overflow = 'auto';
}
window.onload = function(){
  setTimeout(handleScroll, 1500);
  setTimeout(removeLoadingSpinner, 1500);
  
}







