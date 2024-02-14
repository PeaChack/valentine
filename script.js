

button.addEventListener("mouseover", (e) =>{
	const button = document.getElementById("escapeButton");
	console.log(button.style);
	let x = window.innerWidth - parseInt(button.style.width, 10);
	console.log(x);
	button.style.left = x + 'px';
});
