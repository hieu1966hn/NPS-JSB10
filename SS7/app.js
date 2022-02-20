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








// //// Code Mới SS7
// let arr = [];
// ////// C,R,U,D
// /// C: Create: thêm phần tử vào trong mảng
// arr.push('hi', "Hello", "How are you")


// ///// R: Read: lấy ra danh sách phần tử trong mảng
// console.log(arr.join(", "));
// // join: Dùng để tách các phần tử trong mảng thành chuỗi

// // U: Update phần tử trong mảng: (phải biết vị trí phần tử đó ở đâu)
// arr[2] = "am fine thank you, and you"

// // D: Delete phần tử trong mảng: (phải biết vị trí phần tử đó ở đâu)
// arr.splice(1, 1)


/*
Bài tập với nhà hàng: 
Một nhà hàng mới xây dựng có menu hiện tại là 
menu = ['thit cho', 'rau xao', 'rau luoc']

Y/C: xây dựng trương trình như sau:
Mô tả: Khi người vào Web sẽ hiển thị ra 4 lựa chọn là C,R,U,D cho người quản trị. Nếu người admin nhập sai
Nếu nhập sai thì nhập lại.
1. Chọn C => Cho admin nhập vào một món ăn 
2. Chọn R => In ra cho admin danh sách món ăn hiện tại
3. Chọn U => Cho admin nhập vào ten mon muon update => nhap ten mon moi vao
4. Chọn D => Cho admin nhập vào tên món muốn delete => Xóa món đó đi
*/


let menu = ['thit cho', 'rau xao', 'rau luoc'];
let input;
do {
  input = prompt("Người dùng nhập vào \n1. C\n2. R \n3. U \n4. D").trim().toLowerCase();
  if (input == "c") {
    let temp = prompt("Mời admin nhập món ăn muốn thêm");
    menu.push(temp)
  }
  else if (input == "r") {
    console.log("Menu hiện tại là: " + menu.join(", "));
  }
  else if (input == "u") {
    let monMuonCapNhat = prompt("Mời admin nhập món muốn sửa").trim().toLowerCase();
    if (menu.indexOf(monMuonCapNhat) >= 0) {
      menu[menu.indexOf(monMuonCapNhat)] = prompt("Mời admin nhập món mới").trim().toLowerCase();
    }
    else {
      alert("Không tồn tại món này")
    }
  }
  else if (input == 'd') {
    let monMuonXoa = prompt("Mời admin nhập món muốn xóa").trim().toLowerCase();
    if (menu.indexOf(monMuonXoa) >= 0) {
      menu.splice(menu.indexOf(monMuonXoa), 1)
    }
    else {
      alert("Không tồn tại món này")
    }
  }
  else {
    alert("Không tồn tại phương thức đã chọn, mời nhập lại")
  }

  input = "";

}
while (input != 'c' && input != 'r' && input != 'u' && input != 'd');

