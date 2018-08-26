$('#start').on('click', function () {
	game.start();
})

var questions = [{
	question: "This is a test question.",
	answers: ["first test", "second test", "third test", "fourth test"],
	correctAnswer: "first test"
}, {
	question: "This is a test question.",
	answers: ["first test", "second test", "third test", "fourth test"],
	correctAnswer: "first test"
}, {
	question: "This is a test question.",
	answers: ["first test", "second test", "third test", "fourth test"],
	correctAnswer: "first test"
}, {
	question: "This is a test question.",
	answers: ["first test", "second test", "third test", "fourth test"],
	correctAnswer: "first test"
}, {
	question: "This is a test question.",
	answers: ["first test", "second test", "third test", "fourth test"],
	correctAnswer: "first test"
}, {
	question: "This is a test question.",
	answers: ["first test", "second test", "third test", "fourth test"],
	correctAnswer: "first test"



}];

var game = {
		correct: 0,
		incorrect: 0,
		counter: 120,
		countdown: function () {
			game.counter--;
			$('#counter').html(game.counter);
			if (game.counter <= 0) {
				console.log("Time's up");
				game.done();
			}
		},
		start: function (){
				timer = setInterval(game.countdown,1000);
				$('#subwrapper').prepend('<h2>Time Remaining: <span id= "counter">120</span> Seconds</h2>');
				$('#start').on('click', function () {
						$('#start').remove();
						for (var i = 0; i < questions.length; i++){
							$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
							for (var j = 0; j < questions[i].answers.length; j++) {
								$('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
								}
						}

				}
				)}
			}