let grades = [
  73,
  68,
  38,
  33,
];

function gradingStudents(grades) {
  let i, newGrades = [];

  for (i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newGrades.push(grades[i]);
    } else {
      let modulo = grades[i] % 5;
      let remainder = 5 - modulo;
      if (remainder < 3) {
        let newgrade = grades[i] + remainder;
        newGrades.push(newgrade);
      } else {
        newGrades.push(grades[i])
      }
    }
  }

  console.log(newGrades);
  return newGrades
}

gradingStudents(grades);