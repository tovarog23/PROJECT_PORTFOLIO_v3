// OPEN NAVIGATION BAR FUNCTIONS AND EVENTLISTENERS

let popUpStatus;

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

// Get the image info from python:
let popUpText = document.getElementsByClassName('popup-Text')[0];

let imageFileNames = [['analysis.png', 'anchor.png', 'ARCH.png', 'struct.png'], ['render.PNG'], ['BIM.JPG', 'BIM_REBAR_CONCRETE.jpg', 'CONCRETO_COMPLETO_8K.jpg', 'FINAL_PHASE_RENDER_8K.jpg', 'REBAR_COLOR_PHASE_1_8K_CR.jpg', 'REBAR_COMPLETO_8K_CR.jpg'], ['bracing.PNG', 'CONNECTIONS.PNG', 'DRAKE_ARCH.PNG', 'DRAKE_ARCH_2.PNG'], ['arch.PNG', 'render1.PNG'], ['FAIRFAXREVIT.JPG', 'FAIRFAX_CORNERS.jpg', 'FAIRFAX_CORNERS_ARCH.PNG', 'Picture1.png', 'Picture2.png'], ['fairfield_arch.PNG', 'structural.PNG'], ['HOTEL_INDIGO_ARCH_3D.PNG', 'INDIGO.JPG', 'INDIGO_REAL.PNG'], ['La_Porta_Building.JPG', 'La_Porta_Building_Stresses.JPG', 'LA_PORTA_STEEL.JPG'], ['Assembly_Drawing.jpg', 'BIM_3.JPG', 'BIM_MILENIO.JPG', 'BIM_MI_2.JPG', 'Building.JPG'], ['BIM_4.JPG', 'BIM_INZAR_STEEL.png', 'BIM_INZAR_STEEL_3.png', 'bpets_project_ram_elements.JPG'], ['ANALYSIS.JPG', 'CUBIERTA.JPG', 'Masonry_Walls_Fem_Model.jpg', 'rvt.JPG', 'RVTSCHOOL.JPG'], ['analysis.PNG', 'structural.PNG', 'woodsprings.PNG']];
let academicImageNames = [['CONCRETE_DESIGN .JPG', 'FORCES_SAP200.JPG'], ['ANALYSIS.jpg', 'Image3.png', 'rot.JPG', 'sk2.JPG'], ['STEEL_DESIGN_PROJECT1.JPG', 'STEEL_DESIGN_PROJECT2.JPG', 'STEEL_DESIGN_PROJECT3.JPG', 'STEEL_DESIGN_PROJECT5.JPG'], ['DISPLACEMENTS.PNG', 'ELFP.PNG', 'MASONRY_BUILDING_OVERVIEW.PNG', 'PIER_LOADS.PNG', 'RS_GRAPH.PNG', 'TRIB_AREAS.PNG', 'WALLS_ETABS.PNG']];

const projectNames = ['Drake', 'Fairfax', 'La_Porta', 'Hotel_Indigo','Viktor_Frankl', 'Fairfield-Inn', 'PetsGarden', 'Crown_Plaza', 'Embassy_Suites', 'Milenio', 'Woodsprings', 'Cruz_Roja', 'BridgeBar']; // In the same order as the items in the HTML file
console.log(projectNames.length)
const projectFolders = ['BridgeBar', 'Crown_Plaza', 'Cruz_Roja', 'Drake', 'Embassy_Suites', 'Fairfax', 'Fairfield-Inn', 'Hotel_Indigo', 'La_Porta', 'Milenio', 'PetsGarden', 'Viktor_Frankl', 'Woodsprings']; // exact order of folders in directory

const academicNames = ['MIDASLATAM','Steel', 'UBC', 'Integrador'];//current order in html file
const academicFolders = ['Integrador', 'MIDASLATAM', 'Steel', 'UBC']; // exact order of folders in directory

console.log(projectFolders.length)

function mapIndexes(originalArray, anotherArray) {
  let newArray = [];
    originalArray.forEach(name=>{
        newArray.push(anotherArray.indexOf(name))
    })
    return newArray
}
let folderMapping = mapIndexes(projectFolders, projectNames);
console.log('folder mapping: ',folderMapping);
let academicMapping = mapIndexes(academicFolders, academicNames);
console.log('academic mapping: ', academicMapping)

const pathBuilder = (fileName,  project, type) =>{
  if(type === 'project'){
    return './resources/images/projects/' + project + '/' + fileName;
  }else{
    return './resources/images/academic/' + project + '/' + fileName;
  }
    
}
const pathBuilderText = (fileName, type) =>{
  if(type === 'project'){
    return './resources/files/projects/' + fileName + '.txt';
  }
  else{
    return './resources/files/academic/' + fileName + '.txt';
  }
}

function rotateImages(finalImagePaths) {
    const slideshow = document.querySelector('.images');
    console.log(slideshow);
    let currentImageIndex = 0;
    // Function to show the next image
    function showNextImage() {
      console.log('currentpaths: ',finalImagePaths)
      console.log(slideshow.children);
      let currentImage = slideshow.lastChild;
      console.log('currentImage: ',currentImage);
      currentImage.classList.remove('active');
      currentImage.classList.add('entering-from-left');

      currentImageIndex = (currentImageIndex + 1) % finalImagePaths.length;
      const nextImage = createImageElement(finalImagePaths[currentImageIndex]);
      nextImage.classList.add('entering-from-right');
      slideshow.appendChild(nextImage);

      setTimeout(function () {
        currentImage.style.display = 'none';
        currentImage.classList.remove('entering-from-left');
        currentImage.remove();
        nextImage.classList.remove('entering-from-right');
        nextImage.classList.add('active');
      }, 200);
    }

    function showPreviousImage() {
      console.log('currentpaths: ',finalImagePaths)
      // const currentImage = slideshow.querySelector('.active');
      let currentImage = slideshow.children[2];
      currentImage.classList.remove('active');
      currentImage.classList.add('entering-from-right');

      currentImageIndex = (currentImageIndex - 1 + finalImagePaths.length) % finalImagePaths.length;
      const previousImage = createImageElement(finalImagePaths[currentImageIndex]);
      previousImage.classList.add('entering-from-left');
      slideshow.insertBefore(previousImage, currentImage);

      setTimeout(function () {
        currentImage.style.display = 'none';
        currentImage.classList.remove('entering-from-right');
        currentImage.remove();
        previousImage.classList.remove('entering-from-left');
        previousImage.classList.add('active');
      }, 200);
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
    const initialImage = createImageElement(finalImagePaths[currentImageIndex]);
    initialImage.classList.add('active');
    slideshow.appendChild(initialImage);
    // Set interval to automatically change images every 5 seconds
    // setInterval(showNextImage, 5000);

    document.getElementById('backward').addEventListener('click', showPreviousImage);
    document.getElementById('forward').addEventListener('click', showNextImage);
}

const removeImages = () =>{
  const imageCanvas = document.getElementsByClassName('images')[0];
  imageCanvas.removeChild(imageCanvas.querySelector('.active'));
}

// Pop up window:

// ITEMS MAPPED WITH THE INDEX OF EACH PROJECT NAME

let imageContainers = document.getElementsByClassName('img_container one');
let academicContainers = document.getElementsByClassName('img_container two');

let popUp = document.getElementsByClassName('pop-up');
console.log(popUp[0]);
let htmlBody = document.getElementsByTagName('body');
console.log(htmlBody[0]); // Will serve as the container for pop up backgroundj
let headerSection = document.getElementsByTagName('header');
let popUpBackground = document.getElementById('dark-overlay');

const fetchText = (textPath) =>{
  console.log('final text path: ', textPath);
  fetch(textPath)
    .then(response => response.text())
    .then(text => {
      // document.getElementsByClassName('')
      document.getElementsByClassName('popup-Text')[0].innerHTML = text;
    })
}

const closePopup = () =>{
  popUpStatus = false;
  popUp[0].style.display = 'none';
  htmlBody[0].style.overflow = 'visible';
  popUpBackground.style.display = 'none';
  removeImages();
}

const openPopup = (event) =>{
  popUpStatus = true;
  console.log('Parent element',event.target.parentElement.classList.value);
  console.log('ID: ', event.target.parentElement.id);

  popUp[0].style.display = 'flex';
  htmlBody[0].style.overflow = 'hidden';
  popUpBackground.style.display = 'block ';
  // load elements based on item clicked
  let itemSplit = event.target.parentElement.id.split('m');
  let itemNum = itemSplit[1];
  let finalImagePaths = [];
  let nameTag;

  if(event.target.parentElement.classList.value === 'img_container one'){
    console.log('CONTAINER 1')
    nameTag = projectNames[itemNum-1];
    let folderPath = pathBuilder(nameTag,'','project');  
    console.log(folderPath);
    console.log(itemNum-1);
    let referenceIndex = folderMapping.indexOf(itemNum-1);
    console.log(referenceIndex);
    let finalImageNames = imageFileNames[referenceIndex];
    console.log(finalImageNames);
    finalImageNames.forEach(imageName=>{
      finalImagePaths.push(pathBuilder(imageName, nameTag, 'project'));
    });
    console.log('FINAL IMAGE PATHS',finalImagePaths);
  }
  else{
    console.log('CONTAINER 2')
    let referenceDim = projectNames.length + 1;
    nameTag = academicNames[itemNum-referenceDim];  
    console.log('NAME TAG',nameTag);
    let folderPath = pathBuilder(nameTag,'','academic');  
    console.log(folderPath);
    console.log(itemNum-1);
    let referenceIndex = academicMapping.indexOf(itemNum-referenceDim);
    console.log('REFERENCE INDEXXXXX ',referenceIndex);
    let finalImageNames = academicImageNames[referenceIndex];
    console.log(finalImageNames);
    finalImageNames.forEach(imageName=>{
      finalImagePaths.push(pathBuilder(imageName, nameTag, 'academic'));
    });
    console.log('FINAL IMAGE PATHS',finalImagePaths);
  }
  // get the relevante image names
  console.log('yes');
  console.log('REPRINT',finalImagePaths);
  rotateImages(finalImagePaths);

  let textPath;
  // Load Corresponding information for each project type
  if(event.target.parentElement.classList.value === 'img_container one'){
    console.log('CONTAINER 1')
    textPath = pathBuilderText(nameTag, 'project');
    console.log('This is the TEXT PATH',textPath);  
  }
  else{
    console.log('CONTAINER 2')
    textPath = pathBuilderText(nameTag, 'academic');
    console.log(textPath);
  }
  fetchText(textPath);
  // Update title based on item
  let projectTitle = document.getElementById(event.target.parentElement.id.toString()).children[2].innerHTML;
  console.log(projectTitle);
  document.getElementsByClassName('project-title')[0].innerHTML = projectTitle;

}


console.log(imageContainers.length);
console.log(imageContainers[0])

for(let i=0; i<imageContainers.length; i++){
  imageContainers[i].addEventListener('click', openPopup);
}
for(let i=0;i<academicContainers.length;i++){
  academicContainers[i].addEventListener('click', openPopup);
}

let closeButton = document.getElementsByClassName("closebtnPop");

closeButton[0].onclick = closePopup;

// window.addEventListener('load', rotateImages);

document.onkeydown = function(e){
  if (popUpStatus && e.key == 'Escape'){
    console.log('escape clicked');
    closePopup();
  }
}
// LOAD ELEMENTS WITH SCROLLING:
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
  const fadeImages = document.querySelectorAll('.img_container');
  const slideRightElements = document.querySelectorAll('#slide-right');
  // slideLeftElements[0].style.opacity = 1;

  fadeElements.forEach((element)=>{
    if(isElementInViewport(element)){
      element.style.opacity = 1;
    }
  });
  fadeImages.forEach((element)=>{
    if(isElementInViewport(element)){
      element.style.opacity = 1;
    }
  });
  slideRightElements.forEach((element)=>{
    if(isElementInViewport(element)){
      element.style.opacity = 1;
      element.style.transform = 'translateX(0)';
    }
  });
}

const slideTitle = () =>{
  console.log('hello world');

  let slideTitle = document.getElementById('slideTitle');
  console.log(slideTitle);
  // animation
  slideTitle.style.opacity = 1;
  slideTitle.style.transform = 'translateX(0)';

}

slideTitle();
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


