console.log('Script.js connected')
console.log(document.lastModified)

const body = document.body

const btn = document.querySelector('button')
btn.innerText = 'Javascript is fun!!'
const divs = document.getElementsByTagName('div')
const secondDiv = divs[1]

btn.addEventListener('click', () => {

    secondDiv.textContent = 'The button was clicked'
    secondDiv.style.fontSize = '50px'
    secondDiv.style.color = 'teal'
    secondDiv.style.fontFamily = 'arial'

    body.style.backgroundColor = 
    `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`
})
// const firstDiv = divs[0]
// firstDiv.innerHTML = "<h1>Hello Scholar Bukola!</h1>"

// firstDiv.style.backgroundColor = 'teal'

// console.log(body.getAttribute("id")); // "container"
// body.setAttribute("id", "new_container");
// firstDiv.classList.remove('world')
// console.log(firstDiv.classList); // "new_container"

// //
// // innerText | textContent / innerHTML
// console.log(btn.innerText)