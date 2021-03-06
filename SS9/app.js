/// Kiểu dữ liệu trong JS
/*
- Number: SốL: 1,2,3,4,..
- String: Chuỗi: "Hi", 'Hello', `Bye`
- Undefined: Kiểu không xác định: thường xảy ra khi mà khai báo biến nhưng không gán giá trị
- Boolean: True/ False
- Object: Đối tượng
- Null: Kiểu rỗng (ít áp dụng)
*/

////// KHai báo biến: Biến thì dùng để lưu trữ dữ liệu(tất cả kiểu dữ liệu)
// Cú pháp khai báo biến: let/var/const

// let a; // khai báo biến (ưu tiên dùng let)
// a = `Hi`;
// console.log(a);
// a = 'Hello'
// console.log("a: ", a);
// var b; // khai báo biến

// const Pi = 3.14; // khai báo hằng số: => Giá trị của biến đó không thay đổi
// console.log("Pi: ", Pi);


/*
Toán tử trong Javascript:

- Toán tử số học: +, -, *, /

- Toán tử so sánh: >, <, ==, ===, &&, ||
  + "==": So sánh tương đối (Chỉ so sánh về giá trị)
  + "===": So sánh tuyệt đối (So sánh về giá trị và Kiểu dữ liệu)
  + "&&": Và Và: So sánh các trường hợp với nhau, Chuyên tìm kết quả false để trả về
  + "||": Hoặc Hoặc: So sánh các trường hợp với nhau, Chuyên tìm kết quả True để trả về

  VD: 1 == "1", 1 === "1"
  VD: "&&": console.log(2>1 && 3>1 && 10>1 && 2>3)
  VD: "||": console.log(1>2 || 3>4 || 6> 10 || 2>1 || 1 > 100);



*/


///// Câu điều kiện trong Javascript: if - (else if) - else
// let diem = -1;
// if (diem > 5) {
//   alert("Điểm lớn hơn 5")
// }
// else if (diem === 5) {
//   alert("Điểm = 5")
// }
// else {
//   alert("Điểm nhỏ hơn 5")
// }


//// Vòng lặp trong Javascript: While - (do - while) - for
/// VD về while: in ra các số từ 1 -> 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i = i + 1; // Sau mỗi lần lặp, i tăng 1 đơn vị
// }

// VD: với do while
// let i = 1;
// do {
//   console.log(i);
//   i = i + 1;
// }
// while (i <= 10);

// VD: với for
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/// Mảng (danh sách)
/// Đối tượng (Object)


//// Thao tác với form
const formElement = document.getElementById("info");
//                  Thẻ form

formElement.addEventListener("submit", function (event) {
  event.preventDefault();// hàm chặn sự kiện reload mặc định của trình duyệt

  const data = {
    firstName: formElement.firstName.value,
    lastName: formElement.lastName.value,
    gender: formElement.gender.value,
    city: formElement.city.value,

  }

  console.log("data: ", data);

})