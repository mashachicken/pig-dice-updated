

Game.prototype.addScores = function(turn) {
  for (var i = 1; i < turn.length; i++){
    if (turn.includes(1)){
      alert("Next player's turn")
    } else if  (turn.includes(2) || turn.includes(3) || turn.includes(4) || turn.includes(5) || turn.includes(6))  {
      console.log('hit the else if');
    }
    console.log("working")
  }
return turn
}
}


  // function Player(score) {
  //   this.score = 0
  // }
  //
  // fu

  // Player.prototype.addTurn = function(turn) {
  //   if ()
  //   //sum = add dices together
  //
  //
  //





  function Game(player1, player2, score1, score2) {
    this.player1 = player1;
    this.player1 = player1;
    this.score1 = 0;
    this.score2 = 0;
  }
  if $("#hold1").click(function(event) {
      event.preventDefault();
      
  }
  // flippy = new Thing('Flippy', 44, "5 foot 2")
  //
  // {
  //   name: 'Flippy',
  //   age: 44,
  //   object: {
  //     height: "5 foot 2"
  //   }
  // }
  //
  // flippy.object.height
  // flippy[object][height]
  //







//user interface
$(document).ready(function(){
  var pigDice = new Game();
  console.log(pigDice)
  // call your game constructor here to make a new game
  var turn = [];
  $("#button").click(function(event){
    event.preventDefault()
    var dice = Math.floor((Math.random() * 6) + 1)
    turn.push(dice);
    $(".results").append(dice + ", ");
    var result = pigDice(turn)
    console.log(result)
  })
  })
