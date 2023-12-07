function calculateSum() {
    let number = 1000000000;
    let sum = i = 0
    for (; i < number; i++) {
        sum += i
    }
    return sum
}

addEventListener('message', (event) => {
    console.log('Worker is working', event)
    if (event.data === 'calculate sum') {
        console.log('This will calculate sum')
        const result = calculateSum()
        console.log(result)
        postMessage(result)
    }
})