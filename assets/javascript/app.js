$(document).ready(function() {




        function displayQuestion(gameQuestion) {

            $('.question').text(gameQuestion.question)

            $('.answers').each(function(index, answer) {

                    $(this).text(gameQuestion.answers[index])
                }


            )
        }


    $(".alert").hide();
    var questions = [{
            question: 'House of Cards? Who play Frank Underwood',
            answers: ['Frank Underwood', 'Kevin Spasey', 'Stiven Sigal', 'Vladimir Putin'],
            correctAnswer: 'Kevin Spasey'
        },

        {
            question: 'Where you work?',
            answers: ['student', 'programmer', 'olen', 'loshpek'],
            correctAnswer: 'student'
        },
              {
            question: 'Where you work?',
            answers: ['student', 'programmer', 'olen', 'loshpek'],
            correctAnswer: 'student'
        },
              {
            question: 'Where you work?',
            answers: ['student', 'programmer', 'olen', 'loshpek'],
            correctAnswer: 'student'
        },
              {
            question: 'Where you work?',
            answers: ['student', 'programmer', 'olen', 'loshpek'],
            correctAnswer: 'student'
        },
              {
            question: 'Where you work?',
            answers: ['student', 'programmer', 'olen', 'loshpek'],
            correctAnswer: 'student'
        }

    ]
    var timer = 10;
    var questionIndex = 0;
    var gameQuestion = questions[questionIndex];


function DisplayAlert(string) {
        timer = 10;  
    $(`.${string}`).show()

    setTimeout(function(){
           
            $(`.${string}`).hide()

    }, 3000)
}

 // DisplayAlert("success")
 // DisplayAlert("danger")

    $(document).on('click', '.startbtn', function(event) {
        event.preventDefault();


        function reduceTime() {

            if (timer <= 0) {
                // clearInterval(handle?: long)
                 questionIndex++
               DisplayAlert("danger")

               console.log("questionIndex")
               // console.log(questionIndex)
               // console.log(gameQuestion)
               gameQuestion = questions[questionIndex];
               displayQuestion(gameQuestion)
            }

            timer--
            $('.seconds').text(timer)
            console.log(timer)
            if (timer < 10) {

                $('.seconds').css('color', "white")
            }
        }

        var gameInterval = setInterval(reduceTime, 1000);

       

        displayQuestion(gameQuestion)

        // questionIndex++



        $(document).on('click', '.answers', function(event) {
            console.log($(this).text())

        });



        // $(document).on('click', '.answers', function(event){

        // console.log($(this).text())

        // });
    });



    // setTimeout(reduceTime, 1000);


    // $(".btn-group btn-group-justified").on('click', function(){
    //     $('#ans1').hide();
    //     $('#ans2').hide();
    //     $('#ans3').hide();
    //     $('#ans1').fadeIn(1000);

    //     console.log();
    // });



});



// function Quiz(question, answer, enabled, asked) {
//   this.question = question;
//   this.answer = answer;
//   this.enabled = enabled == false ? false : true;
//   this.asked = asked ? asked : 0;
// }
// Quiz.prototype.ask = function () {
//   document.getElementById("divSolution").innerHTML += "<p>" + this.question + "</p>";
//   this.asked++;
// }
// function stateQuiz(capital, state, enabled) {
//   return new Quiz(capital + ' is the capital of which state?', state, enabled);
// }

// // Create quiz array
// var question, 
//   quiz = [],
//   enabled = [],
//   stateCapitals = [
//     ['Montgomery', 'Alabama', false],
//     ['Juneau', 'Alaska', true],
//     ['Phoenix', 'Arizona', true],
//     ['Little Rock', 'Arkansas', false],
//     ["Sacramento", "California", true],
//     ["Denver", "Colorado", false],
//     ["Hartford", "Connecticut", false],
//     ["Dover", "Delaware", false],
//     ["Tallahassee", "Florida", false],
//     ["Atlanta", "Georgia", true]
//   ];

// for (var i = 0; i < stateCapitals.length; i++) {
//   question = stateQuiz(stateCapitals[i][0], stateCapitals[i][1], stateCapitals[i][2]);
//   quiz.push(question);
//   if (question.enabled) enabled.push(question);
// }
// // Ask all enabled questions in random order
// while (enabled.length) {
//   // splice removes an element from the array and returns the removed element
//   question = enabled.splice(Math.floor(Math.random() * enabled.length), 1)[0];
//   question.ask();
// }