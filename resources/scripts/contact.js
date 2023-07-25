// OPEN NAVIGATION BAR FUNCTIONS AND EVENTLISTENERS

const openNav = () =>{
    document.getElementById("myNav").style.width = "100%";
}
  
const closeNav = () =>{
    document.getElementById("myNav").style.width = "0%";
}

let projectButton = document.getElementById("Projects");
projectButton.onclick = openNav;
let secondProjectButton = document.getElementById('Projects2');
secondProjectButton.onclick = openNav;

let exitButton = document.getElementsByClassName("closebtn");
exitButton[0].onclick = closeNav;



// FORM VALIDATION AND SUBMITTAL TO FORMSPREE

let formBox = document.getElementById('form');
let formContainer= document.getElementById('formContainer');
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    // Get form data
    var form = event.target;
    var formData = new FormData(form);

    // Send form data using AJAX
    axios.post(form.action, formData)
        .then(function(response) {
        if (response.status === 200) {
        // Show success message
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('retry').style.display = 'block';
            formBox.style.display = 'none';
            formContainer.style.display = 'block';
            form.reset();

        } else {
        // Show error message
            document.getElementById('error-message').style.display = 'block';
        }
    })
    .catch(function(error) {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    });
});










