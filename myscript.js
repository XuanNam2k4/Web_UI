//khai báo mảng 1 chiều
var array = new Array(1,2,3);
//truy xuất mảng
console.log(array[0])
console.log(array[1])
console.log(array[2])
//sử dụng join
console.log(array.join('-'))
console.log(array)
//sử dụng vòng lặp for
var array1 = [1,2,3];
for(var i = 0; i < array1.length; i++){
    console.log("<br>" + array1[i]);
}
// toString: chuyển đổi về thành chuỗi
var array2 = [1,2,"Học Lập trình"]
console.log(array2.toString())
//push: thêm phần tử vào trong mảng
var mang1 = ["Học","Lập","Trình","Tại","Đại","Học"]
mang1.push("Nha Trang")
console.log(mang1)
console.log(mang1.toString())
//pop: xoá phần tử trong mảng ở cuối
mang1.pop()
console.log(mang1)
//shift : xoá phần tử đầu tiên trong mảng
mang1.shift()
console.log(mang1)
// unshift: thêm phần tử vào đầu đẩy phần tử phía sau lên 1 bậc
var mang2 = ["Học","Lập","Trình","Tại","Đại","Học"]
mang2.unshift("Chào mừng đến lớp,")
console.log(mang2)
//splice : tách chuỗi theo start,numberitem,item1,item2,...
var mang3 = ["Học","Mừng","Đến","Với","Lớp","Học","Lập","Trình","F8"]
mang3.splice(1,3,"PHP","HTML","CSS")
console.log(mang3)
//splice : có thể xoá 1 số phần tử
mang3.splice(1,2)
console.log(mang3)
//slice : tạo thành mảng mới mà bắt đầu từ start tới end
var mangmoi = mang3.slice(3,7)
console.log(mangmoi)
//sort : sắp xếp tăng dần: thứ tự: number --> string --> boolean
var sort1 = [3,1,'X',"A",true]
sort1.sort()
console.log(sort1)
//reverse: đảo ngược phần tử
sort1.reverse()
console.log(sort1)
//concat: nối 2 mảng với nhau trả về tổng 2 mảng đó
var arr3 = ["Chào","Mừng","Học"]
var arr4 = ["Học","Lập","Trình","Tại","NTU Nha Trang"]
var mangmoi2 = arr3.concat(arr4)
console.log(mangmoi2)

//DATE 
var objdate1 = new Date()
console.log(objdate1)
//khởi tạo 1 đối tượng có ngày , tháng , năm
var objdate2 = new Date(2025,11,5)
console.log(objdate2)
var obj3 = new Date(2025,8,13)
console.log(obj3.getDate())
//hàm lấy ngày getDate phải cộng lên 1 mới có kết quả chính xác bởi vì bắt đầu bằng 0
console.log(obj3.getDay())
console.log(obj3.getFullYear())
console.log(obj3.getHours())
console.log(obj3.getMinutes())
console.log(obj3.getMilliseconds())