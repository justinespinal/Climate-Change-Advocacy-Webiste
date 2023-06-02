let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");
    document.querySelector(".info").classList.toggle("dark-mode");
    document.querySelector(".justin").classList.toggle("justin-dark");
  document.querySelector(".info").classList.toggle("justin-dark");
}
themeButton.addEventListener("click", toggleDarkMode);


// Add your query for the sign now button here
const form = document.getElementById('sign-petition');

const signNowButton = document.querySelector('#sign-now-button');
const newSign = document.createElement('p');
const div = document.querySelector('.signatures');

const addSignature = (person) => {
    // Write your code to manipulate the DOM here
  newSign.innerText = `🖊️ ${person.name} from ${person.home} supports this.`;
  div.appendChild(newSign);
  
}


let audio = new Audio("sound/Yippee_Original_Sound_Effect.mp3");

const validateForm = (event) => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {

    name: petitionInputs[0].value,
    home: petitionInputs[1].value,
    email: petitionInputs[2].value
    
  }
  
  for(let i = 0; i<petitionInputs.length; i++)
  {
    if(petitionInputs[i].value.length < 2)
    {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else{
      petitionInputs[i].classList.remove('error');
    }
    
  }
  if (!person.email.includes('.com')) {
      email.classList.add('error');
      containsErrors=true;
    }
    else {
      email.classList.remove('error');
    }
  // TODO: Validate the value of each input
  if(containsErrors==false)
  {
    addSignature(person);
    for(let i = 0; i<petitionInputs.length; i++)
    {
      petitionInputs[i].value="";
      containsErrors=false;
    }
    toggleModal(person);
    audio.play();
  }


  // TODO: Call addSignature() and clear fields if no errors
  
  event.preventDefault();
}

signNowButton.addEventListener('click', validateForm);

// Animation for top forest animation

const bird = document.getElementById("bird");
const background = document.getElementById("background");
const foliage = document.getElementById("foliage");
const forest = document.getElementById("forest");
const text = document.getElementById("textTop");

let rates = {
  background : 0.5,
  bird:0.5,
  forest:0.15,
  foliage:0.15,
  text: 1
}

const handleScroll = () => {
  let scrollDistance = window.scrollY;

  background.style.top = scrollDistance * rates.background + 'px';
  bird.style.left = -scrollDistance * rates.bird + 'px';
  text.style.top = scrollDistance * rates.text + 'px';
  forest.style.top = -scrollDistance * rates.forest + 'px';
  foliage.style.top = scrollDistance * rates.foliage + 'px';
  

}

window.addEventListener('scroll', handleScroll);


let modal = document.getElementById('thanks-modal');
let modalContent = document.getElementById('thanks-modal-content');

const toggleModal = (person) =>{
  
  modal.style.display = "flex";
  modalContent.innerText = `Thank you so much ${person.name}! ${person.home} represent!`;
  let intervalId = setInterval(scaleImage,500);
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
  
}

let scaleFactor = 1;
let modalImage = document.getElementById('modal-img');

const scaleImage = () =>{
  
  if(scaleFactor===1)
  {
    scaleFactor = 0.8;
  }
  else{
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
  
}

let modalButton = document.getElementById('close-modal');
const hideModal = () =>{
  modal.style.display="none";//this will hide the modal upon button click
  
}
modalButton.addEventListener('click',hideModal);
//Animation for sections

let animation = {
revealDistance: 150,
initialOpacity :0,
transitionDelay :0,
transitionDuration :'2s',
transitionProperty : 'all',
transitionTimingFunction : 'ease'
};

let revealableContainers = document.querySelectorAll(".revealable");
console.log(revealableContainers);
const reveal = () =>{
  for(let i = 0; i<revealableContainers.length; i++)
  {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;    

    if(topOfRevealableContainer < windowHeight - animation.revealDistance){
        revealableContainers[i].classList.add('active');
    }
    else{
        revealableContainers[i].classList.remove('active');
    }
  }
  
}

window.addEventListener('scroll', reveal);


// Get references to the buttons
const githubButton = document.getElementById("github-button");

const linkedinButton = document.getElementById("linkedin-button");

// Define the links
const githubLink = "https://github.com/justinespinal";

const linkedinLink = "https://www.linkedin.com/in/justin-espinal-74b3ab251/";

// Define a function to handle button clicks
function handleButtonClick(link) {
  // Open the link in a new tab
  window.open(link, "_blank");
}

// Attach onclick event listeners to the buttons
githubButton.onclick = function() {
  handleButtonClick(githubLink);
};

linkedinButton.onclick = function() {
  handleButtonClick(linkedinLink);
};
