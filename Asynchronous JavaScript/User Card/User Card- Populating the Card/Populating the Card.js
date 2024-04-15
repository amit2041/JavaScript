const divEle = document.querySelector('.card-container');

function getDetails(id){

    const request = new XMLHttpRequest();

request.open('GET', `https://dummyjson.com/users/${id}`);
request.send();
request.addEventListener('load', function(){
const data = JSON.parse(this.responseText);
console.log(data);



const card = `<div class="user-card">
<img src= ${data.image} alt="Profile image">
<h3>${data.firstName}</h3>
<h3>${data.maidenName}</h3>
<h3>${data.lastName}</h3>
<p class="email">${data.email}</p>
<button class="btn">View Profile</button>
</div>`;

//divEle.innerHTML = card;

divEle.insertAdjacentHTML('beforeend', card); // for multiple user card 

});
}

getDetails(1);
getDetails(3);
getDetails(6);
getDetails(4);