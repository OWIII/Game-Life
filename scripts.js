const fieldSize = 5,
	rowsNumber = 200,
	columnsNumber = 200,
	backgroundColor = 'gray',
	fieldColor = 'yellow',
	canvas = document.querySelector('canvas'),
	context = canvas.getContext('2d'),
	generationTime = 100;

	const lifeGame = new LifeGame(rowsNumber, columnsNumber);

document.querySelector('.start').addEventListener('click', function() {
	document.querySelector('canvas').classList.add('show');
	document.querySelector('.start').classList.add('hide');
	start();
});


function start () {
	canvas.width = fieldSize * columnsNumber;
	canvas.height = fieldSize * rowsNumber;

	lifeGame.reviveRandomFields(rowsNumber * columnsNumber / 2);

	requestAnimationFrame(tick);
};

function clearCanvas() {
	context.fillStyle = backgroundColor;
	context.beginPath();
	context.rect(0, 0 , canvas.width, canvas.height);
	context.fill();
};

function drawField(x, y, color) {
	context.fillStyle = fieldColor;
	context.beginPath();
	context.rect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
	context.fill();
}

function tick (timeStamp) {
	clearCanvas();

	if (timeStamp > lifeGame.generationNumber * generationTime) {
		lifeGame.changeGeneration();	
	}
	

	lifeGame.forFreeEach((x, y) => 	drawField(x, y, fieldColor));

	requestAnimationFrame(tick);
};
