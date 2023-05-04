//!! Write an *array of objects* and name it questions. Each object in this array includes "question," "choices," and "correctAnswer" as properties. 
// This is your "database" for all the 10 questions, multiple choice answers for each question, and correct answers for each question.
// The 'question' property holds the question's text.
// The 'choices' property is an array of strings that stores the multiple choice answers for each question. Not all questions should have the same number of choices.
// The 'correctAnswer' property stores a numeric value which is the index of the correct choice in the choices array.



let currentQuestion = 0; //Storing the index of the active question. We set its initial value to 0. Why?
let score = 0; //Storing the number of times the user chose the correct answer. We set its initial value to 0.

function displayQuestion() {
    // !! Write a line of code that gets access to the div element with quiz id in our HTML code. Stores the element in a variable named quizDiv.

    quizDiv.innerText = ''; // Clearing previous content in the quizDiv to display new question and answers every time this function is called.

    // !! Create and display the current question (3 lines of code): Create an 'h2' element whose text is the current question and append it to quizDiv

    // Now, you should create and display choices for the current question (3 steps):
    // The steps are: Create an unordered list element, create list items with the content of multiple choice answers, add the list to quizDiv
    // Here's a further breakdown of these 3 steps:
    
    // !! First: Create a 'ul' (unordered list) element and name it answerList. This will include all the choices for the current question.

    // Second: Now, we need a for loop that iterates through the currentQuestion's choices and add each one as a list item to the ul created above: 

    for (let i = 0; i < /* !! the length of choices for the current question*/; i++) {
        
        //!! Create an 'li' element and name it choice. This is going to be used for displaying each choice.

        //The following four lines create the radio button style input for multiple choice answers:
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "choice");
        input.setAttribute("value", i);

        // !! Add the input element (created above) as a child to the choice element you created above. This way, a radio button is added to the choice.
        // !! create a textnode with the content of the "i"th choice in the current question. Name this textnode choiceText.
        // !! Add choiceText as a child to the choice element. 
        // !! Add choice as a child to the answerList element you created before.
    }

    // !! Third: Append the answerList element to the quizDiv
}

displayQuestion(); // This is to make sure displayQuestion runs once the page loads.


// Every time the button is clicked, nextQuestion function is called:
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="choice"]:checked'); //Stores the answer chosen by the user in selectedOption variable.

    // Checking if the user has clicked on Next before choosing an answer. If so, alert the user.
    if (selectedOption === null) {
        alert("Please select an option before proceeding!");
        return;
    }

    // Checking if the selectedOption's value matches the correct answer, and if so, increment the score
    if (parseInt(selectedOption.value) === questions[currentQuestion].correctAnswer) {
        score++;
    }

    //!! Write a line of code so every time this function is called (using the event listener on the button), we add one to the currentQuestion value.


    //The following if block checks whether we have displayed all the questions yet or not. Based on that, 
    //we show the next question (by calling the displayQuestion function) or show the final score.

    if (currentQuestion < /* !! the length of the questions array */) {
        displayQuestion();
    } else {
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = 'Your score: ' + score + ' out of ' + questions.length;
        document.getElementById("quiz").style.display = "none"; //Making quiz div disappear
        document.querySelector("button").style.display = "none"; //Making the button disappear
    }
}
