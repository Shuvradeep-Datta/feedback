function myfun(a,b,c) {
    console.log("Hello World");
    console.log(a+b+c);
    
}

myfun(10,12,15);


const myfun1=(a,b,c)=>{
    console.log("Hello Arrow Function");
    console.log(a+b+c);
};
myfun1(10,12,14);


function test(sayhello) {
    console.log("Say HEllo");
    sayhello();
}

test(()=>{
    console.log("This is sayhello function")
})


// Callback Function

function fetchData(url,successCallback){
    console.log("Fetching Data");
    console.log(url);
    successCallback();

}

fetchData('http://',()=>{
    console.log("Success");
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>{
console.log(response);
}).catch((error)=>{
    console.log(error);
});



// String   Template

let name="Ali";
let message=`Hello ${name}`;
let a=45;
let b=79;
console.log(message);
console.log(`${a+b}`);
const fetchData1 =(url)=>console.log(url);

const baseUrl=`http://localhost:8080`;
const userId="123456";
fetchData1(`${baseUrl}/api/v1/${userId}/images`);


// Object & Array Destructuring:


const person = {name:"Ali",age:20};
const friends = ['arvind','sanskar','chandan','deep'];
console.log(friends);
const f1 = friends[0];
const f2 = friends[1];
console.log(f1);
console.log(f2);


// Rest & Spread Operator
const newFriend =[
    ...friends,
    "sachin",
    "rahul"
]

console.log(newFriend);


const  user ={
    ...person,
    age:25,
    city:"Delhi",
    country:"India"
}

console.log(user);



