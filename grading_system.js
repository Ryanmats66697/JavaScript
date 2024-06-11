function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    let classAvg = getAverage(totalScores);
    let grade = getGrade(studentScore);
    if (grade === "F") {
      return "Class average: " + classAvg + ". Your grade: " + grade + ". You failed the course.";
    } else {
      return "Class average: " + classAvg + ". Your grade: " + grade + ". You passed the course.";
    }
  }
  
  
  let totalScoresInput = prompt("Enter the total scores separated by commas:");
  let studentScoreInput = prompt("Enter the student's score:");
  
  
  let totalScores = totalScoresInput.split(',').map(Number);
  let studentScore = Number(studentScoreInput);
  
  console.log(studentMsg(totalScores, studentScore));
  