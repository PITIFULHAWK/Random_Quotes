// let btn = document.getElementById("btn");
// let output = document.querySelector(".output");

let quotes = [" Avoid daydreaming about the years to come.", "You are the most important person in your whole life.", "Always be true to who you are, and ignore what other people have to say about you.", "Always be true to who you are, and ignore what other people have to say about you.", "Only demonstrate your strength when it's really required."];

// btn.addEventListener("click" , ()=>{
//     console.log("clicked");
//     let random = Math.floor(Math.random()*quotes.length);
//     output.textContent = quotes[random];
// });

let btn = $('#btn');
let output =  $('.output');

btn.on("click" , ()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quotes.length);
    output.text(quotes[random]);
})
