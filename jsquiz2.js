let questions = [
    {
      question: "Q1",
      choices: ["one", "two", "three", "four"],
      correctAnswer: 1,
    },
    {
      question: "Q2",
      choices: ["A", "B", "C"],
      correctAnswer: 0,
    },
    {
      question: "Q3",
      choices: ["Museums", "Academia", "Publishers"],
      correctAnswer: 2,
    },
  ];
  
  let currentQuestion = 0; //Storing the index of the active question. We set its initial value to 0.
  let score = 0; //Storing the number of times the user chose the correct answer. We set its initial value to 0.
  
  function displayQuestion() {
    let quizDiv = document.getElementById("quiz");
    quizDiv.innerText = "";
  
    let questionHeading = document.createElement("h2");
    let newText = document.createTextNode(questions[currentQuestion].question);
    questionHeading.appendChild(newText);
    quizDiv.appendChild(questionHeading);
  
    let answerList = document.createElement("ul");
  
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      let choice = document.createElement("li");
  
      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "choice");
      input.setAttribute("value", i);
  
      choice.appendChild(input);
  
      let choiceText = document.createTextNode(
        questions[currentQuestion].choices[i]
      );
  
      choice.appendChild(choiceText);
      answerList.appendChild(choice);
    }
  
    quizDiv.append(answerList);
  }
  
  displayQuestion();
  
  function nextQuestion() {
    const selectedOption = document.querySelector(
      'input[name="choice"]:checked'
    );
  
    if (selectedOption === null) {
      alert("Please select an option before proceeding!");
      return;
    }
  
    if (
      parseInt(selectedOption.value) ===
      questions[currentQuestion].correctAnswer
    ) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      const resultDiv = document.getElementById("result");
      resultDiv.innerText =
        "Your score: " + score + " out of " + questions.length;
      document.getElementById("quiz").style.display = "none";
    }
  }
  