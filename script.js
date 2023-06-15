let burger = document.querySelector('.burger');
let navlinks = document.getElementById('.nav-links');
let links = document.querySelectorAll('.links');




for (let i = 0; 1 < links.length; i++) {
	links[i].addEventListener('click', () => {
		navlinks.classList.toggle('hide');
	});
}


console.log("ok");