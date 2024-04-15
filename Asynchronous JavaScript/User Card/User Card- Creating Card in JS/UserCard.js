const divEle = document.querySelector('.card-container');

const request = new XMLHttpRequest();

request.open('GET', 'https://dummyjson.com/users/1');
request.send();
request.addEventListener('load', function(){
  //  console.log(request.responseText);
 //   console.log(typeof request.responseText);


    // convert string to javaScript object
//console.log(JSON.parse(this.responseText));

// convert string to javaScript object within new variable
const data = JSON.parse(this.responseText);
console.log(data);

const card = `<div class="user-card">
<img src="https://media.istockphoto.com/id/1182595599/vector/cartoon-robot-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=ZhQCeEg-Oo7q71XdBlnIoXj_MVCMcIn9spMx3Z-TGR8=" alt="Profile image">
<h3>John</h3>
<h3>Doe</h3>
<p class="email">j.doe@gmail.com</p>
<button class="btn">View Profile</button>
</div>`;

divEle.innerHTML = card;

});