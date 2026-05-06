/**
 * Lab: Build a Gradebook App
 * 
 * Description: In this lab, you will create a couple of functions that are described bellow:
 *               - getAverage()      that takes an array of test scores as a parameter
 *                                   and returns the average score.
 * 				 - getGrade()        that takes a student score as a parameter
 *                                   and returns a string representing a
 *                                   letter grade based on the score.
 *               - hasPassingGrade() that takes a score as a parameter and returns
 *                                   either true or false depending on if the score
 *                                   corresponds to a passing grade.
 *               - studentMsg()      that takes an array of scores and a student score
 *                                   as the parameters. and returns a formatted message.
 * 
 * Example: studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) → "Class average: 50.8. Your grade: A+. You passed the course."
 */

const getAverage = (scores) => {
  let sumOfAllScores = 0;
  for (let i = 0; i < scores.length; i++) {
    sumOfAllScores += scores[i];
  }
  return sumOfAllScores / scores.length;
}

const getGrade = (studentScore) => {
  if (studentScore === 100)
    return "A+";
  else if (studentScore >= 90)
    return "A";
  else if (studentScore >= 80)
    return ("B");
  else if (studentScore >= 70)
    return ("C");
  else if (studentScore >= 60)
    return "D";
  else 
    return "F";
}

const hasPassingGrade = (score) => {
  return (getGrade(score) !== "F");
}

const studentMsg = (scores, studentScore) => {
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
  }
  return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));