const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo = 0;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

// Add your code here
const catsArray = JSON.parse(catString)
console.log(catsArray)

for (let index = 0; index < catsArray.length; index++) {
    const cat = catsArray[index];

    if (index === catsArray.length - 1) {
        motherInfo = motherInfo + ' and ' + cat.name + '.'
    } else {
        motherInfo = motherInfo + ' ' + cat.name
    }
    kittenInfo += cat.kittens.length
}

// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);