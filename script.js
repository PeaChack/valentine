const button = document.getElementById("noButton");

button.addEventListener("mouseover", (e) => {
	let buttonWidth = parseInt(getComputedStyle(button).width, 10);
	let buttonHeight = parseInt(getComputedStyle(button).height, 10);
	let x = getRand(buttonWidth / 2, window.innerWidth - buttonWidth);
	let y = getRand(0, window.innerHeight - buttonHeight);
	console.log("x = " + x);
	console.log("y = " + y);
	button.style.left = x + 'px';
	button.style.top = y + 'px';
});

function getRand(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
