//Bubbling
document.querySelector('h3').addEventListener('click', () =>
console.log('Heading 3 Clicked'), //true
);

document.getElementById('innerDiv').addEventListener('click', ()=>
console.log('Inner Div Clicked'), //true
);

document.getElementsByTagName('div')[0].addEventListener('click', ()=>
console.log('Outer Div Clicked'), //true
);

document.body.addEventListener('click', ()=>
console.log('Body Clicked'), //true
);