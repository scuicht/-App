// var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
// //输出 true
// console.log(uPattern.test("iFat3"));
var text = document.querySelector('.text')
function checkPhone(){ 
    var phone = document.getElementById('phone').value;
    if(!(/^1[3456789]d{9}$/.test(phone))){ 
        alert("手机号码有误，请重填"); 
        return false; 
        this.value = ''
    } 
}