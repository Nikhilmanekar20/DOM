// Q1
const text =  document.getElementById("text1").innerHTML = "Hello World";
console.log(text);

// Q2
const name = document.getElementsByTagName("h1");
console.log(name[1].innerText);

// Q3
const fine = document.getElementsByClassName("box");
console.log(fine[0].innerText);

// Q4
const okay = document.getElementById("ok");
okay.innerText="Hello World";

// Q6
const attribute = document.getElementById("heading").style.color="Red"

// Q7
function myFunction() {
    document.getElementById("flex-property").style.flexDirection = "column-reverse";
}

// Q9

function timer(){
    const time = new Date();
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    console.log(hr, min, sec);
    document.getElementById("clock").innerText = hr + " : " + min + " : " + sec;
}
setInterval(timer, 1000);

const selectValue = () => {
    document.getElementById("temp").innerText = 
    document.getElementById("choose").Value;
};