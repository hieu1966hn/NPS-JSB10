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

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);
// }



/*
Nhập vào 1 số nguyên bất kỳ. In ra các số nguyên tố từ 1 -> n
VD: 10: 2,3,5,7

Với số nguyên tố là số chia hết cho 1 và chính nó. Bắt đầu từ số 2
*/

// Hàm nhập dữ liệu từ trình duyệt: promt
// let number = Number(prompt("Mời người dùng nhập vào số nguyên dương bất kỳ"));//10
// // ép kiểu cho biến number về kiểu dữ liệu Number:
// // number = Number(number)
// console.log("number: ", number);


// // vòng lặp tăng từ 2 -> number
// for (let i = 2; i <= number; i++) {


//   // vòng lặp kiểm tra số nguyên tố
//   let dem = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) { dem++ }
//   }

//   if (dem == 2) { console.log(i); }
// }




/* Cho người dùng nhập vào số bất kỳ: với đk như sau
1. Nếu là số dương -> in ra nó
2. Nếu là số âm -> bắt người dùng nhập lại
*/

// let input;
// // Lưu ý: khởi tạo biến bên ngoài do.
// do {
//   input = Number(prompt("Mời người dùng nhập vào số nguyên dương"));
// }
// while (input < 0);
// console.log(input)

/////// Mảng
//// khai báo mảng
//C1:
// let x = [19, 10, 8, 17, 9, 15];
// console.log("x: ", x);
// console.log(x[4]);//9


//// Duyệt mảng với vòng lặp for
// let arr = [1, 2, 3, 'hello'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


////// Đối tượng trong Javascript
// let Nguoi = {
//   name: "Nam",
//   age: 17,
//   cmnd: 123456789,
//   address: "HaNoi"

// }

// console.log(Nguoi);
// // In ra tuoi cua người
// console.log(Nguoi.age);

// // In ra dia chi cua người
// console.log(Nguoi.address);

// // In ra CMND cua người
// console.log(Nguoi.cmnd);


////VD: luu trữ form đăng ký đưới dạng đối tượng (object)
let user = {
  lastName: "Nguyen",
  firstName: 'Hieu',
  phone: "012345678",
  password: "@Password",
  birthday: [12, 2, 2022],
  sex: "male",
}

// Lúc chưa thay đổi giới tính
console.log("user: ", user);

// Đã đi cập nhật lại giới tính
user.sex = "female"
console.log("user: ", user);

/// Xóa thuộc tính sex
delete user.sex;
console.log("user: ", user);
