// let a = 3;
// let b = 4;

// console.log(a+b);

// function sum(a,b){
//    return a+b
// }
// function min(a,b){
//    return a-b
// }
// console.log(sum(2,3));
// console.log(sum(2,5));
// console.log(min(2,9));

// const data = () =>{
//     alert("Hello Jagriti")
// }

let x = prompt("Enter the first Number")
x = Number.parseInt(x)
let y = prompt("Enter the Second Number")
y = Number.parseInt(y)

const add = (a,b) =>{
    document.write(a+b)
}
const sub = (a,b) =>{
    document.write(a-b)
}
const mul = (a,b) =>{
    document.write(a*b)
}
const div = (a,b) =>{
    document.write(a/b)
}
const btn1 = () =>{
    add(x,y)
} 
const btn2 = () =>{
    sub(x,y)
} 
const btn3 = () =>{
    mul(x,y)
} 
const btn4 = () =>{
    div(x,y)
} 
    