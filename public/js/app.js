

// console.log('pearuss is no 1')
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })
// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             return console.log(data.error)
//         }
//         console.log(data)
//     })
// })
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = "Load..."
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    
    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            return messageOne.textContent = data.error
        }
        console.log(data)
        messageOne.textContent =  data.address + ' is ' + data.Today
        messageTwo.textContent = "Temperature : " + data.Temporature 
    })
})

    
})