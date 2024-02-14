const button = document.getElementById("escapeButton");

button.addEventListener("mousemove", (e) => {
	const x = e.clientX / window.innerWidth - 0.5;
	const y = e.clientY / window.innerHeight - 0.5;
	
	button.style.setProperty("--button-width", '${button.offsetWidth}px');
	button.style.setProperty("--button-height", '${button.offsetHeight}px');
	
	button.style.transform = translate(${x * 25}px, ${y * 25}px);
});