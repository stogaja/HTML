//ADDING A NEW ELEMENT TO HTML

//add a new p tag
const newP = document.createElement('p');

//creating a text node
const newDivText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.');

//append text to p tag
newP.appendChild(newDivText);


const container = document.querySelector('div');

const firstDiv = document.querySelector('div .first-div')

container.insertBefore(newP, firstDiv);

console.log(newP);

//new div

const newDiviation = document.createElement('div');

newDiviation.className = 'first-div';

const newPara =  document.createElement('p');

const text = document.createTextNode('This is the this trial in JavaScript Dom part 2 tutorials by Traversy Media');

newPara.appendChild(text);

newDiviation.appendChild(newPara);

const body = document.querySelector('body');

const btn = document.querySelector('button');

body.insertBefore(newDiviation, btn)

//add a fourth paragraph

const deviationNew = document.createElement('div');
deviationNew.className = 'first-div';
const para =document.createElement('p');
const txt = document.createTextNode('This is the third paragraph');
para.appendChild(txt);
deviationNew.appendChild(para);
body.insertBefore(deviationNew, btn);