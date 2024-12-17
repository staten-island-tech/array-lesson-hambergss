//ASSIGNMENT 1 Practicing forEach and filter with Student Data

const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

// 1. Log each student’s name and grade
students.forEach((student) => console.log(student.name, student.grade));

// Filter students with grades above 80
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

//Filter students who are 21 or younger
const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

//Log the names of students who scored above 80
students
.filter((student) => student.grade > 80)
.forEach((student) => console.log(student.name));

//Log the names of students 21 or younger
students
.filter((student) => student.age <= 21)
.forEach((student) => console.log(student.name));


//ASSIGNMENT 2 Practicing forEach and filter with Product Data

const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
  { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
  { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
  { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
  { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
  { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
  { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];

//Display Product Details: Log the name and price of each product
products.forEach((product) => console.log(product.name, product.price));


//Log Highly Rated Product Names: Use filter to get the highly rated products (rating >= 4.5) and then use forEach to log only their names.
const highlyRatedProducts = products.filter((product) => product.rating >= 4.5);
highlyRatedProducts.forEach((product) => console.log(product.name));









const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

//Filter students who are 21 or younger and print each of them

const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

students
.filter((student) => student.age <= 21);
.forEach((student) => console.log(student.name);

//For each student, increase their grade by 2 points and print the new grades 

const increasedGrades = students.forEach((student) => student.grade + 2);
console.log(increasedGrades);




























