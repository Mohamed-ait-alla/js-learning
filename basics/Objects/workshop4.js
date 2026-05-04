/*
 * Lab: Build a Quiz Game
 */

const questions = [
  {
    category: "JavaScript Basics",
    question: "What is the output of typeof null?",
    choices: ["null", "object", "undefined"],
    answer: "object"
  },
  {
    category: "HTML",
    question: "Which tag is used to create a hyperlink?",
    choices: ["<link>", "<a>", "<url>"],
    answer: "<a>"
  },
  {
    category: "CSS",
    question: "Which property is used to change text color?",
    choices: ["text-color", "color","background-color"],
    answer: "color"
  },
  {
    category: "Programming",
    question: "Which data structure uses FIFO (First In First Out)?",
    choices: ["Stack", "Queue", "Tree"],
    answer: "Queue"
  },
  {
    category: "Web",
    question: "What does HTTP stand for?",
    choices: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Protocol",
      "HyperTransfer Text Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  }
];

const getRandomQuestion = (questions) => {
  const len = questions.length - 1;
  const randomNum = Math.round(Math.random() * (len - 0) + 0);
  return questions[randomNum];
};


const getRandomComputerChoice = (choices) => {
  const len = choices.length - 1;
  const randomChoice = Math.round(Math.random() * (len - 0) + 0);
  return (choices[randomChoice]);
};

const getResults = (question, computerChoice) => {
  if (question.answer === computerChoice)
    return "The computer's choice is correct!";
  else
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
};


let gRandomQuestion = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(gRandomQuestion.choices);
let result = getResults(gRandomQuestion,computerChoice);

console.log(result); 
