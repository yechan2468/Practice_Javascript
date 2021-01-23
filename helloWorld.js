'use strict';
console.log('hello');

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  let str = '';
  fruits.forEach(fruit => (str += ' ' + fruit));
  console.log(str);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const fruitArray = [];
  for (let i = 0; i < 4; i++) {
    fruitArray.push(fruits.split(',')[i]);
  }
  console.log(fruitArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  let newArray = new Array();
  newArray = array.slice(2);
  console.log(newArray);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const score90 = students.find(student => student.score === 90);
  console.log(score90);
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = students.filter(student => student.enrolled);
  console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let scores = [];
  students.forEach(student => scores.push(student.scores));
  console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
  console.log(students.find(student => student.score < 50) !== undefined);
}

// Q9. compute students' average score
{
  let sum = 0;
  students.forEach(student => (sum += student.score));
  console.log(sum / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let result = '';
  students.forEach(student => (result += `${student.score.toString()}, `));
  console.log(result.slice(0, -2));
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let result = '';
  const studentsSorted = students.sort((a, b) => a.score - b.score);
  studentsSorted.forEach(student => console.log(student.score));
  studentsSorted.forEach(
    student => (result += `${student.score.toString()}, `),
  );
  result = result.slice(0, -2);

  console.log(result);
}
