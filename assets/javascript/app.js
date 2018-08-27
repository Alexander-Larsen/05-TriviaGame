$('#start').on('click', function () {
	game.start();
})

$(document).on('click','#end',function(){
	game.done();
})


//array of questions with correct answers that will appear when the game begins.
var questions = [{
	question: "What is the name of the ship that the crew is assigned to?",
	answers: ["Nostromo", "Prometheus", "Auriga", "Sulaco"],
	correctAnswer: "Nostromo"
}, {
	question: "The crew picks up a distress beacon from what planet?",
	answers: ["Earth", "Europa", "LV-426", "K3-774"],
	correctAnswer: "LV-426"
}, {
	question: "A facehugger lays an egg inside of which member of the crew?.",
	answers: ["Ash", "Kane", "Dallas", "Ripley"],
	correctAnswer: "Kane"
}, {
	question: "The ships primary super computer is named?",
	answers: ["MUTHUR", "CASPAR", "FATHUR", "DAVID"],
	correctAnswer: "MUTHER"
}, {
	question: "What crewmember is revealed to be a synthetic android unbeknownst to the crew?",
	answers: ["Ripley", "Bishop", "Dallas", "Ash"],
	correctAnswer: "first test"
}, {
	question: "Ripley escapes on a lifeboat named _____ at the end of the film.",
	answers: ["Narcissus", "Patna", "Marlow", "Verloc"],
	correctAnswer: "Narcissus"



}];
//game logic
var game = {
		correct: 0,
		incorrect: 0,
		counter: 20,
		countdown: function(){
			game.counter--;
			$('#counter').html(game.counter);
			if (game.counter<=0){
				console.log("Time's up");
				game.done();
			}
		},

		//starts game when start putton is clicked. This reveals the questions and answers on the HTML and starts the timer.
		start: function (){
				timer = setInterval(game.countdown,1000);
				$('#subwrapper').prepend('<h2>Time Remaining: <span id= "counter">120</span> Seconds</h2>');
				$('#start').on('click', function () {
						$('#start').remove();
						for (var i=0;i<questions.length;i++){
							$('#subwrapper').append('<h2>' + questions[i].question+ '</h2>');
							for (var j = 0; j < questions[i].answers.length; j++) {
								$('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
								}
						}
						$('#subwrapper').append('<br><button id="end">DONE</button>');

				}
				)},
//Each of these functions are unique to each Q and A in the questions array and will check if each answer is correct or incorrect.
				done: function(){
					$.each($("input[name='question-0']:checked"),function(){
						if($(this).val()== questions[0].correctAnswer){
							game.correct++;
						} else {
							game.incorrect++;
						}
					});
					$.each($("input[name='question-1']:checked"),function(){
						if($(this).val()== questions[1].correctAnswer){
							game.correct++;
						} else {
							game.incorrect++;
						}
					});
					$.each($("input[name='question-2']:checked"),function(){
						if($(this).val()== questions[2].correctAnswer){
							game.correct++;
						} else {
							game.incorrect++;
						}
					});
					$.each($("input[name='question-3']:checked"),function(){
						if($(this).val()== questions[3].correctAnswer){
							game.correct++;
						} else {
							game.incorrect++;
						}
					});
					$.each($("input[name='question-4']:checked"),function(){
						if($(this).val()== questions[4].correctAnswer){
							game.correct++;
						} else {
							game.incorrect++;
						}
					});
					$.each($("input[name='question-5']:checked"),function(){
						if($(this).val()== questions[5].correctAnswer){
							game.correct++;
						} else {
							game.incorrect++;
						}
					});

					this.result();
				},

				result: function(){
					clearInterval(timer);
					$('#subwrapper h2').remove();

					$('#subwrapper').html("<h2>Complete!</h2>");

					$('#subwrapper').append("<h3>Correct Answers: "+this.correct+ "</h3>");
					$('#subwrapper').append("<h3>incorrect Answers: "+this.incorrect+ "</h3>");
					$('#subwrapper').append("<h3>Unanswered: "(questions.length-(this.incorrect+this.correct))+"</h3>");
				}
}