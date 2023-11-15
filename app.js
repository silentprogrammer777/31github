//JSON
// const objAboutMe={
//     name:'Imran',
//     age:19
// }
//
// const jsonAboutMe = JSON.stringify(objAboutMe)
// const newObjectAboutMe = JSON.parse(jsonAboutMe)
// console.log(newObjectAboutMe)


    // XHR-XML HTTP Request

// const button = document.querySelector('.btn')
//
// button.addEventListener('click', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type","application/json")//указывание загаловка
//     request.send()// отправка  запроса
//     request.addEventListener('load', ()=>{
//         const data = JSON.parse(request.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML=data.age
//     })
// })


const peoples =[
    {
        name:'Nurdin',
        age:19
    },
    {
        name:'Rafael',
        age:14
    },
    {
        name:'Aigen',
        age:17
    },
    {
        name:'Imran',
        age:14
    },
    {
        name:'Zarina',
        age:19
    }
]
const peoplesBlock = document.querySelector('.peoples')
peoples.forEach((person)=>{
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
    <img src="data:image/png;base64,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" alt="profile">
    <h3>Name: ${person.name}</h3>
    <span>Age: ${person.age}</span>
    `
    peoplesBlock.append(div)
})