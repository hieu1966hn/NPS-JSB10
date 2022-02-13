// Tiếp tục học về Javascript tại đây nhé

/////// 3 vòng lặp cơ bản

//// While: In ra các số từ 1 -> 10
/*
B1: Kiểm tra điều kiện (điều kiện dừng)
B2: Nếu điều kiện đúng -> CHạy code bên trong while -> quay lại bước 1
B3: Nếu điều kiện sai -> Thoát khỏi vòng lặp.
*/
// let i = 1;
// while (i <= 10) { // true || false
//   console.log(i); // 1, 2,... 10
//   i = i + 1; // 2, 3, ..., 11
// }


//// do - while: In ra các số từ 1 - 10
/*
B1: Cho phép chạy code trong "do" lần đầu tiên.
B2: Kiểm tra điều kiện
B3: Nếu điều kiện đúng -> Chạy code trong "do" -> về B2
B4: Nếu điều kiện sai -> thoát khỏi vòng lặp
*/
// let i = 1;
// do {
//   // coding
//   console.log(i); // 1
//   i = i + 1; // 2
// }
// while (i <= 10);

/* Cho người dùng nhập vào số bất kỳ: với đk như sau
1. Nếu là số dương -> in ra nó
2. Nếu là số âm -> bắt người dùng nhập lại
*/

//// for:
// C1:
// let i = 1;
// for (; i <= 10;) {
//   console.log(i);
//   i = i + 1;
// }


// C2:
/*
B1: Chạy câu lệnh khởi tạo đầu tiên ở ô 1
B2: Kiểm tra điều kiện
B3: Nếu điều kiện đúng -> chạy code trong ngoặc {} -> chạy câu lệnh ở ô 3 -> Quay về B2
B4: Nếu điều kiện sai -> Thoát vòng lặp


*/

for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}
