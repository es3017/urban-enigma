var wrap = document.body.querySelector(".wrapper");
var number = 1;
var match = prompt("How much damage do you want to inflict on the dragon?")

var addValue = Number(prompt("How many times would you like to hit the dragon?"))

for(var i = 0; i<5;i++){
  number=number+1;
}

while(match==="1"||match==="2"||match==="3"||match==="4"||match==="5"){ 
  match=prompt("How much damage do you want to inflict on the dragon?")
}

document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10) + 1;

wrap.innerHTML="The Dragon Wins...";