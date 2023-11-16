// console.log('hello')

//флаги


//регулярные выражения - regular expression


//
// const string = prompt('Enter your name...')
//
// const regExp = /n/gi
//
// console.log(string.match(regExp));
//


// const symbol='AaabbbCcc'
// const regExp =/c/gi
//
// console.log(symbols.match(regExp));

// const numbers='123Qwe123_qwe_213'

// const regExp = new RegExp('123','g')
// const regExp=/[\d&?]/g

// console.log(numbers.replace(regExp, '*'))
// console.log(numbers.match(regExp))

//Рекурсия - Recursion

let num = 0

const count = () => {
    num++
    console.log(num)
    if(num<500){
        count()
    }
}
count()
