// Chữa bài 1 lab
let fruits = [
  ["grape", 5],
  ["banana", 10],
  ["watermelon", 3],
  ["apple", 15],
];

// // C1: Vòng lặp for
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Tên quả ${(fruits[i])[0]} với số lượng:${(fruits[i])[1]}   `);
//   // truyền biến vào chuỗi: ``
// }

// C2: Vòng lặp rút gọn for in
// for (let index in fruits) {
//   // console.log(index);// in ra gì vị trí của từng phần tử mảng
//   console.log(`Tên quả ${(fruits[index])[0]} với số lượng:${(fruits[index])[1]}`);
// }

// C3: Vòng lặp rút gọn for of
for (let key of fruits) {
  // console.log(key); // in ra gì? In ra giá trị của từng phần tử trong mảng
  console.log(`Tên quả ${key[0]} với số lượng:${key[1]}`);
}
