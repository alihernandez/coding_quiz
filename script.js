var questions = [
    {
          prompt: "What color are apples?\n(a) Red/Green\n(b) Purple\n(c) Orange",
          answer: "a"// idk why did you use \n\Purple instead of \n Purple
    },
    {
         prompt: "What color are Bananas?\n(a) Teal\n(b) Magenta\n(c) Yellow",
         answer: "c"// you used \n\Magenta instead of \n Magenta
    },
    {
         prompt: "What color are strawberries?\n(a) Yellow\n(b) Red\n(c) Blue",
         answer: "b"//ans. is not a,you used \n\Red instead of \n Red
    }
];
var score = 0;


for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);