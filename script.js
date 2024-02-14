const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const centerImg = document.getElementById("center-img");
let yesPressedCounter = 0;

noButton.addEventListener("mouseover", (e) => {
	let buttonWidth = parseInt(getComputedStyle(noButton).width, 10);
	let buttonHeight = parseInt(getComputedStyle(noButton).height, 10);
	let prevX =  parseInt(getComputedStyle(noButton).left, 10)
	let prevY =  parseInt(getComputedStyle(noButton).top, 10)
	let x = getRand(buttonWidth / 2, window.innerWidth - buttonWidth);
	let y = getRand(0, window.innerHeight - buttonHeight);
	console.log(window.innerWidth + ',' + window.innerHeight)
	console.log(prevX + ',' + prevY);
	console.log(x + ',' + y);
	noButton.style.left = x + 'px';
	noButton.style.top = y + 'px';
});

function getRand(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

yesButton.addEventListener("click", (e) =>{
	yesPressedCounter++;
	if(yesPressedCounter == 1){
		let text = document.getElementById("text");
		text.innerHTML = "Так будем мы вместе, так будем мы рядом<br>с тобою всегда!"
		centerImg.setAttribute("src", "./resources/bear-kiss-bear-kisses.gif");
	}
})