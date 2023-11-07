// const person = {
//     name: 'adewale',
//     role: 'frontend developer'
// }

// let x = person

// const user = 'role'
// x.age = 30

// for (const x in person) {
//     console.log(x, person[x])
// }

// console.log(person[user])

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

console.log(myObj)
document.getElementById('demo').innerHTML = Object.values(myObj)
// console.log(myObj.cars[0].models[0])