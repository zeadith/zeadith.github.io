var navigationMenu = document.getElementById('navigation-menu');
var navigationButton = document.getElementById('hamburger-button');
navigationButton.addEventListener('click', function () {
  navigationButton.classList.toggle('is-active');
  navigationMenu.classList.toggle('is-closed');
}, false);


//this is such an ugly way to do it but it works :c
var navigationElementsList = document.getElementsByTagName('li');
var aboutMe = document.getElementById ('about-me');
var contact = document.getElementById ('contact-me');
var myProjects = document.getElementById ('projects');
navigationElementsList[0].addEventListener('click', function () {
	aboutMe.scrollIntoView ();
});
navigationElementsList[2].addEventListener('click', function () {
	myProjects.scrollIntoView ();
});
navigationElementsList[1].addEventListener('click', function () {
	contact.scrollIntoView ();
});
