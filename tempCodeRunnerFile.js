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

//Part 1 (1)
products.forEach((product) => console.log(product.name, product.price));

//Part 1 (2)
products.forEach((product) => console.log(product.name, product.price * 1.1));

//Part 1 (3)
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

//Part 2 (1)
const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

//Part 2 (2)
const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

//Part 2 (3)
const highratedProducts = products.filter((product) => product.rating >= 4.5);
console.log("High Rated Products:", highratedProducts);

//Part 3 (1)
highratedProducts.forEach((product) => console.log(product.name));

//Part 3 (2)
const affordableElectronics = electronics.filter(
  (product) => product.price < 1000
);
console.log(affordableElectronics);
affordableElectronics.forEach((product) => console.log(product.name));