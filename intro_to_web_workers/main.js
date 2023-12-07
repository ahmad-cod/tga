const box = document.querySelector('.container')
const backgroundBtn = document.querySelector('#backgroundBtn')
const sumBtn = document.querySelector('#sumBtn')




backgroundBtn.addEventListener('click', () => {
    if (box.style.backgroundColor === 'green') {
        box.style.backgroundColor = 'red'
    } else {
        box.style.backgroundColor = 'green'
    }
})

const worker = new Worker('worker.js')

sumBtn.addEventListener('click', () => {
    worker.postMessage('calculate sum')
    worker.addEventListener('message', (message) => {
        alert(`The sum is ${message.data}`)
    })
    // alert(`The sum is ${sum}`)
})