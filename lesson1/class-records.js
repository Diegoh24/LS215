/*
grading areas include exams and excersies with the following weights
exam : 65%
exercises: 35%

each term has 4 exams and several exercises. Every exam has a fixed maximum score of 100,
while exercises have varied maximum score values and counts.
The total maximum point value for all exercises in any term is always 100, regardless of how many
exercises the students had to complete.


To determine a student's grade we first determine the average score
from the four exams, then sum all the exercises scores

THen you apply the weights to compute the student's final percent grade.
Finally, you determine the letter equivalent grade from the student's percent grade you just
computed.

TO determine the final grade you:
- compute the student's average exam score
- compute the student's total exercise score:
- apply weights to determine the final percent grade:
- round the percent grade to the nearest integer:
- lookup the letter grade in the table
- combine the percent grade and letter grade


output will be an object containing 2 properties
studentGrades with a value that is an array of student grades, with the grade average, and the corresponding letter
Exams with a value that is an array that contains each exam represented by an object with the
average, minimum, and maximum scores.
*/

/*
use a letter grade method to calculate the letter grade of the student


iterate over each student (data)
array of objects, with each object containing only the scores property
iterate over the 2 properties in the scores array and compute the grades of each student,
  reduction - over both arrays

for each student in studentScores, determine the average of their grades
  reducing both arrays in the scores object the average,
  calculate the average course grade: exams * .65 + exerciseAvg * .35
  return the array

iterate over the array of average, convert it to a string, and append a letter graade

for each student, get the exam grades and store in an array containing 4 elements, each element representing
all the student grades for the given exam

*.
function generateClassRecordSummary(scores) {

}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function letterGrade(grade) {
  if (grade >= 93)
    return 'A';
  else if (grade >= 85)
    return 'B';
  else if (grade >= 77)
    return 'C';
  else if (grade >= 69)
    return 'D';
  else if (grade >= 60)
    return 'E';
  else
    return 'F';
}

function getAverageGrades(scores) {
  let students = Object.entries(scores);
  let studentScores = students.map(student => student[1].scores);

  return studentScores.map(grades => {
    let examsAvg = grades.exams.reduce((sum, grade) => sum + grade);
    examsAvg /= grades.exams.length;

    let exercisesAvg = grades.exercises.reduce((sum, grade) => sum + grade)
    exercisesAvg /= grades.exercises.length;

    let average =  examsAvg * EXAM_WEIGHT + (exercisesAvg * EXERCISE_WEIGHT)
    return average.toFixed() + ` (${letterGrade(average)})`;
  });
}

function getExamGrades(scores) {
  let examGrades = Object.entries(scores).map(student => {
    student[1].scores.exams
    });

  let examCount = examGrades[0].length;
  let examStats = []

  for (let exam = 0; exam < examCount; exam += 1) {
    let average = examGrades.reduce((sum, scores) => sum + scores[exam], 0) / examGrades.length;
    let minimum = examGrades.reduce((min, scores) => min <= scores[exam] ? min : scores[exam]);
    let maximum = examGrades.reduce((max, scores) => max >= scores[exam] ? max : scores[exam]);

    examStats.push({average, minimum, maximum});
  }

  return examStats
}

function generateClassRecordSummary(scores) {
  let studentGrades = getAverageGrades(scores);
  let examGrades = getExamGrades(scores);

  return {
    studentGrades: studentGrades,
    exams: examGrades,
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/