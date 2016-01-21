
// Fade 'stencil' in on window load.
window.onload = function() {
	var stencil = document.getElementById('content');
	stencil.classList.add('solid');
};





// Stick nav to top once user scrolls to/beyond it.
function stickyNav(){
	var height = window.innerHeight - 50;
	if (window.pageYOffset > height){
		var navbar = document.getElementsByTagName('nav')[0];
		navbar.classList.add('fixed');
	}
	if (window.pageYOffset < height){
		var navbar = document.getElementsByTagName('nav')[0];
		navbar.classList.remove('fixed');
	}
};

window.addEventListener('scroll', stickyNav, false);





// Scroll in intervals to move around the page smoothly.
function smoothScroll(distanceFromTop, destination){
	console.log('body:', distanceFromTop);
	console.log('location:', destination);
	var distance = -distanceFromTop - destination
	console.log(distance);
	var move = distance/10
	// console.log(move);
	var timer = setInterval(function(){
		distance -= move
		console.log(distance)
		if (distance < destination) clearInterval(timer)
		window.scrollTo(0, destination)
	}, 20)
}




// Scroll to these sections with space at the top

function alterAnchor(e){
	// Prevent native scroll event.
	e.preventDefault();
	var destination = document.getElementById(e.target.classList[0]);
	// Find distance from top of page.
	var body = document.body.getBoundingClientRect().top;
	// Find distance from top of element to scroll to.
	var element = destination.getBoundingClientRect().top;
	// Find difference.
	var newLoc = element - body - 25;
	// Go there.
	window.scrollTo(0, newLoc);
	// smoothScroll(body, newLoc);
}

var projects = document.getElementsByClassName('projects')[0];
var contact = document.getElementsByClassName('contact')[0];

// Run alterAnchor function when the user clicks the projects or contact links in the menu
projects.addEventListener('click', alterAnchor, false);
contact.addEventListener('click', alterAnchor, false);


// var resume = document.getElementsByClassName('resume')[0];



// Scroll through my projects

var nextArrow = document.getElementsByClassName('fa-angle-right')[0];
var prevArrow = document.getElementsByClassName('fa-angle-left')[0];

function changeProject(e){
	// Get a list off all of the slides
	var slides = document.getElementsByClassName('slide');
	// Find the current slide
	var currentSlide = document.getElementsByClassName('active')[0];
	// Find the index of the current slide in the list of all slides
	var index = Array.prototype.indexOf.call(slides, currentSlide);
	// Figure out if the user wants to go forward or backward
	var targetClasses = e.target.className;
	// If it's backward...
	if (targetClasses.indexOf('left') > -1){
		// Move down one index
		index--;
		// But not below 0
		if (index < 0) {
			index = 5;
		}
	}
	// Otherwise...
	else {
		// Move up
		index++;
		// But not above 5
		if (index > 5) {
			index = 0;
		}
	}
	// Set the next slide to be displayed
	var nextSlide = slides.item(index);
	// Move the active class from the current slide to the next slide to be displayed
	currentSlide.classList.remove('active');
	nextSlide.classList.add('active');
}

// Run changeProject function when the user clicks the arrows
nextArrow.addEventListener('click', changeProject, false);
prevArrow.addEventListener('click', changeProject, false);


// Check to make sure required fields are filled in.
function allowContactSubmission(){
	var nameLength = document.getElementById('entry_348166146').value.length;
	// Male sure this is an email
	var email = document.getElementById('entry_73439495').value;
	var subjectLength = document.getElementById('entry_274250116').value.length;
	var messageLength = document.getElementById('entry_1098022282').value.length;
	var testsPassed = 0;
	// Check to make sure a name was entered
	if (nameLength > 0){
		testsPassed++
	}
	// Check to make sure an email was entered
	if (email.indexOf('@') > -1 && email.indexOf('.') > -1){
		testsPassed++
	}
	// Check to make sure a subject was entered
	if (subjectLength > 0){
		testsPassed++
	}
	// Check to make sure a message was entered
	if (messageLength > 0){
		testsPassed++
	}

	// If all of the required information is there...
	if (testsPassed > 3){
		var submitButton = document.getElementById('ss-submit');
		// Enable submit button
		submitButton.classList.remove('disabled');
		// Hide instructions
		document.getElementsByClassName('instructions')[0].classList.add('hidden');
	}

}

var makeContact = document.getElementById('contact');

// Check to see if form is ready for submission as the user types.
makeContact.addEventListener('keyup', allowContactSubmission, false);





// Hide and show appropriate elements on form submission.
function submitForm(){
	document.getElementById('submitted').classList.remove('hidden');
	document.getElementById('contactForm').classList.add('hidden');
	document.getElementById('ss-submit').classList.add('hidden');
}

document.getElementById('ss-submit').addEventListener('click', submitForm, false);




