// Assignment 1
//Part 1
const students = [
  { name: "Alice", Age: 25, Grade: 85 },
  { name: "Alex", Age: 22, Grade: 90 },
  { name: "Charlie", Age: 21, Grade: 78 },
  { name: "Diana", Age: 23, Grade: 95 },
];
students.forEach((student) => console.log(student.name));

//Part 2
const topStudents = students.filter((student) => student.Grade > 80);

const youngStudents = students.filter((student) => student.Age <= 21);

//Part 3
console.log(topStudents);
console.log(youngStudents);

//Asignment 2
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//Part 1
products.forEach((product) => console.log(product.name, product.price));

//Part 2
products.forEach((product) => console.log(product.name, product.price * 1.1));

//Part 3
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

//Part 4
