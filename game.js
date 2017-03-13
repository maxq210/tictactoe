var currPlayer = true;
var o = [];
var x = [];
var solutions = [
	[1,5,9], [3,5,7], [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9]
];

function clickHandler(id) {
	if(document.getElementById(id).innerHTML === '' && currPlayer){
		document.getElementById(id).innerHTML = "X";
		x.push(parseInt(id));
		checkSol(x, 1);
		currPlayer = !currPlayer;
	}
	else if (document.getElementById(id).innerHTML === ''){
		document.getElementById(id).innerHTML = "O";
		o.push(parseInt(id));
		checkSol(o, 2);
		currPlayer = !currPlayer;
	}
}

function checkSol(player, playerNum) {
	for(var i = 0; i < solutions.length; i++) {
		for(var j = 0; j < 3; j++) {
			if(player.indexOf(solutions[i][j]) === -1){
				console.log(o);
				break;
			}
			if(j === 2){
				document.body.innerHTML = "<h1>" + "Winner: Player " + playerNum + "</h1>";
				console.log('Winner!')
				return;
			}
		}
	}
}
