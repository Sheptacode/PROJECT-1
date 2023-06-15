let burger = document.querySelector('.burger');
let navlinks = document.getElementById('.nav-links');
let links = document.querySelectorAll('.links');

burger.addEventListener('click', () => {
	navlinks.classList.toggle('hide');
	burger.classList.toggle('lines-rotate');
});


for (let i = 0; 1 < links.length; i++) {
	links[i].addEventListener('click', () => {
		navlinks.classList.toggle('hide');
	});
}



console.log("ok");