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
const inRaSoTu1Den10 = function () {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Gọi hàm
inRaSoTu1Den10();



