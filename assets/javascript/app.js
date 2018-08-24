$('#start').on('click',function(){
	$('#start').remove();
	for(var i=0;i<questions.length;i++){
		$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
		for(var j=0;j<questions[i].answers.length;j++){
			$('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
		}
	}
})

var questions =[{
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