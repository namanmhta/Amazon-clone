// var n1=3;
// var n2=3;

// console.log(n1+n2);

// A = "\nHELLO!";
// B = 15;
// C = 20;

// console.log(C + B + A);

// function avg(a,b){
//         c= (a+b)/2;
//         return c;
//     }
    
//     c1= avg(3,4);
//     c2= avg(6,8);

//     console.log(c1,c2)

// ////////////////////////////////////ARRAYS
// let arr=[10,20,30,40,50,70];
// console.log(arr);

// // arr.forEach(function(ele){
// // console.log(ele)
// // })

// for(i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i]);
// }

// ////////////////////////STRINGS//////////////////////////////////////////

// let s="10 20 30 40 50";

// d= s.replace("20","21");

// console.log(d);

// let myd = new Date();
// console.log(myd);

// ///////////////////DOM

// let elem = document.getElementsByClassName('search');

// elem[0].style.background = 'yellow';
// elem[1].classList.add("voice");

// // tn = document.getElementsByTagName('div');
// // console.log(tn);
// // createdEle = document.createElement('p');
// // createdEle.innerText = "hello how are you";
// // createdEle.style.color = "red";
// // tn[0].appendChild(createdEle);


// /////Events
// window.onload=function(){
//     console.log('document is loaded')
// }
// firstb.addEventListener('click', function(){
//     console.log('click hua');
// })

// ////////////////////arrow function// Time out function

// sum = (a,b)=>{
//     return a+b;
// }

// clr = setTimeout(sum,200)

// /////////////////////////////Json//

// obj = {name : "naman", length : "1"}
// jso = JSON.stringify(obj);
// console.log(jso);

// parsed = JSON.parse(`{"name":"naman","length":"1"}`)
// console.log(parsed);

// console.log(localStorage.getItem('score'));


let cart = 0;
b1.addEventListener('click', function(){
    console.log(`Cart Quantity : ${cart}`);
})

b2.addEventListener('click', function(){
    cart++;
    console.log(`Cart Quantity : ${cart}`);
})
b3.addEventListener('click', function(){
    cart += 2;
    console.log(`Cart Quantity : ${cart}`);
})
b4.addEventListener('click', function(){
    cart += 3;
    console.log(`Cart Quantity : ${cart}`);
})
b5.addEventListener('click', function(){
    cart = 0;
    console.log(`Cart Quantity : ${cart}`);
})


localStorage.setItem('cart',JSON.stringify(cart));

