
$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Is jQuery required for this plugin?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
    },
    {
      'q': 'How do you use it?',
      'options': [
        'Include jQuery, that\'s it!',
        'Include jQuery and the plugin javascript.',
        'Include jQuery, the plugin javascript, the optional plugin css, required markup, and the javascript configuration.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Sounds more complicated than it really is.',
      'incorrectResponse': 'Come on, it\'s not that easy!'
    },
    {
      'q': 'The plugin can be configured to require a perfect score.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
      'incorrectResponse': 'Why you have no faith!? Just set allowIncorrect to true.'
    },
    {
      'q': 'How do you specify the questions and answers?',
      'options': [
        'MySQL database',
        'In the HTML',
        'In the javascript configuration'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Refer to the documentation for the structure.',
      'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
    }
  ]
});





/*function submitAnswers(){
  var total = 5;
  var score = 0;

  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  if(q1 == null || q1 = ""){
    alert('You missed question 1');
    return false;
  }
}
*/





/*
var questions = [
  {
    prompt: "What color are apples?\n(a) Red\n (b) Purple\n\ (c) Orange",
    answer: "a"
  },
  {
    prompt: "What color are bananas?\n(a) Teal\n\ (b) Magenta\n (c) Yellow",
    answer: "c"
  }
]

var score = 0;

for(var i=0; i < questions.length; i++){
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!")
  }
}
alert("you got" + score + "/" + questions.length);

*/
