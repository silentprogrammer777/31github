/*var array = [123, 234, 345,56,67,555]
var array1=[]
for (var i=0; i<array.length;i++){
    if(String(array[i]).substr(0,1)=="1" ||String(array[i]).substr(0,1)=="2" ||String(array[i]).substr(0,1)=="5"){
        array1.push(array[i])
    }
}
console.log(array1)
*/
console.log(calc())
//функции
//function-declaration
function calc(num1,num2){
    console.log(num1+num2)
}
calc(34,87)
//function-expression
var strlog=function (string) {
    return alert(string)
}
//strlog(prompt('enter string'))

var getMaxNum = function (num1,num2){
    if(num1>num2){
        console.log(num1)
    }else{
        console.log(num2)
    }
}
getMaxNum(4,2)
//arrow function  и тернарные операторы, lamda function
var getMaxNum2 = (n1,n2)=> console.log(n1>n2?n1:n2)
9
getMaxNum2(3,6)