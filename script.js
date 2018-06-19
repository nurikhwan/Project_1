var holes = document.querySelectorAll(".hole");
var scoreBoard = document.querySelector(".score");
var gnomes = document.querySelectorAll(".gnome");
var lastHole;
var timeUp = false;
var score = 0;

function randomTime() {
	return Math.round(Math.random() * 1000);
}

function randomHole(holes) {
	var i = Math.floor(Math.random() * holes.length);
	var hole = holes[i];
	if (hole === lastHole) {
		console.log("Same hole.");
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}

function peep() {
	var time = randomTime();
	var hole = randomHole(holes);
	hole.classList.add("up");

	setTimeout( () => { hole.classList.remove("up");
							if(!timeUp) {
								peep() };
	}, time);

}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	peep();
	setTimeout(() => timeUp = true, 15000 )
}

function hit() {
	this.classList.remove("up");
	score++;
	scoreBoard.textContent = score;
}

gnomes.forEach(gnome => gnome.addEventListener("click", hit));