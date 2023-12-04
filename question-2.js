import fetch from 'node-fetch';
// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้


const url = 'https://jsonplaceholder.typicode.com/users';

let newUsers = [];
let fetchData = fetch(url)
    .then((response) => {return response.json();
    })
    .then((data) => {
        let authors = data; 
        authors.map(function(author){
            newUsers.push(author.name);
        })
    })
    .then(()=>{return newUsers});

newUsers = await fetchData;
console.log(newUsers); // log of newUsers

let longName = [];
newUsers.map(function(newUser){
    if(newUser.length > 17){
        longName.push(newUser);
    }
});
console.log(longName); // log of longName











