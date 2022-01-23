/*
JS có 6 kiểu dữ liệu cơ bản:
Number: Dùng cho cả số nguyên và số thực.
Boolean: lưu trữ hai giá trị đúng (true) và sai (false). Biến kiểu boolean có thể được dùng thay cho điều kiện trong các câu lệnh khác.
String: String dùng lưu dữ liệu dạng text. Nội dung của string được bao lại trong cặp nháy kép hoặc nháy đơn tùy trường hợp.
Null: Đơn giản là không có giá trị nào cả.
Undefined: Là các giá trị không xác định.
Object: Thể hiện một đối tượng và các thuộc tính có thể truy cập đến.

*/

// VD: Number: 2,3,4,5, -1,-0.12314
// VD: Boolean: 1<2, 2>1, 1!=0 (so sánh mới có đúng/sai)
// VD: String: 'Hello', "Hi", `Hello World`
// VD: null: null
// VD: undefined: mới khởi tạo biến
// VD: Đối tượng: tự định nghĩa.


/*
Toán tử số học trong JS: +,-,*,/, %(chia lấy dư)

 */

// VD: phép toán %
// console.log(5 % 4);// kq?


/*
Toán tử so sánh: <,>,>=,<=,==, ===, !=, !==
*/
// VD về toán tử so sánh
// console.log(1 < 2);
// console.log(1 > 2);
// console.log(1 >= 2); //  false 
// console.log(1 <= 2); //  true
// console.log(2 <= 2); //  true
console.log(1 == 1); // true
console.log(1 == "1"); // true: Vì so sánh tương đối, chỉ so sánh về giá trị
console.log(1 === "1"); // false: Vì so sánh tuyệt đối, so sánh cả về giá trị và kiểu dữ liệu
console.log(1 != 0);// true

console.log(1 != "1");// false: Vì: nó giống nhau về giá trị.
console.log(1 !== "1");// True:  Vì nó khác nhau về kiểu dữ liệu.
