// Chữa bài 1 lab
// let fruits = [
//   ["grape", 5],
//   ["banana", 10],
//   ["watermelon", 3],
//   ["apple", 15],
// ];

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

// // C3: Vòng lặp rút gọn for of
// for (let key of fruits) {
//   // console.log(key); // in ra gì? In ra giá trị của từng phần tử trong mảng
//   console.log(`Tên quả ${key[0]} với số lượng:${key[1]}`);
// }



// // Chữa bài 3
// let myDog = {
//   "name": "ngáo",
//   "legs": 4,
//   friends: ["everything!!"]
// }

// // Đổi tên => Husky
// myDog.name = 'Husky';

// myDog.boss = "Hieu Nguyen"

// // Thêm mới thuộc tính color vào myDog;
// myDog.color = 'brown'


// // Xóa thuộc tính friends
// delete myDog.friends

// console.log(myDog);








//// Code Mới SS7
let arr = [];
////// C,R,U,D
/// C: Create: thêm phần tử vào trong mảng
arr.push('hi', "Hello", "How are you")


///// R: Read: lấy ra danh sách phần tử trong mảng
console.log(arr.join(", "));
// join: Dùng để tách các phần tử trong mảng thành chuỗi

// U: Update phần tử trong mảng: (phải biết vị trí phần tử đó ở đâu)
arr[2] = "am fine thank you, and you"

// D: Delete phần tử trong mảng: (phải biết vị trí phần tử đó ở đâu)
arr.splice(1, 1)
