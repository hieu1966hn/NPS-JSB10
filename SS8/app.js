/// Khai báo hàm
/*
Cú pháp khai báo hàm:
- function: Từ khóa khai báo hàm
- inRaSoNguyenTo: Tên hàm
- (): dấu ngoặc tròn dùng để truyền tham số vào hàm
- {}: Dấu ngoặc nhọn dùng để viết code thực thi bên trong hàm
*/

// function inRaSoNguyenTo() {
//   // cau lenh
//   console.log("This is function");
// }

// // Gọi tới hàm muốn chạy;
// inRaSoNguyenTo();

// /// Viết hàm In ra các số từ 1 -> 10;
// function inRaSoTu1Den10() {
//   /// coding
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// // Gọi hàm
// inRaSoTu1Den10();

/// Viết hàm In ra các số từ 1 -> 10; Cách 2
// const inRaSoTu1Den10 = function () {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// // Gọi hàm
// inRaSoTu1Den10();



///// Hàm có tham số truyền vào: (áp dụng lại với hàm inRaSoTu1Den10)
// function inRaSoTu1Den10(n) {
//   /// coding: in ra các số từ 1 -> 10
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

//   // in ra tham số ở đây
//   console.log(n); // 1000
// }

// inRaSoTu1Den10(1000); // ???


//////// Hàm có trả về giá trị (có chữ "return"):
// function inRaSoTu1Den10(n) {
//   /// coding: in ra các số từ 1 -> 10
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

//   // in ra tham số ở đây
//   console.log(n); // 1000
//   return n;// 1000
// }

// // inRaSoTu1Den10(1000); // ???
// let giaTriHam = inRaSoTu1Den10(1000)
// console.log(giaTriHam);

/// Tại sao phải cần return (trả về giá trị): Để Tận dụng lại kết quả hàm trả về cho code.


/// VD hàm Greet
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Nguyễn Hiếu");

/// Xây dựng hàm tìm số nhỏ nhất trong 2 số truyền vào;
const min = function (a, b) {
  if (a < b) {
    return a;
  }
  else if (a == b) {
    return "Không so sánh được"
  }
  else {
    return b;
  }
}


console.log(min(3, 3)); // 
