let myform = document.getElementById("myform");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

myform.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = input.value;

    localStorage.setItem("username", name);
    msg.innerText = name;
});

let saveName = localStorage.getItem("username");
if (saveName) {
    msg.innerText = saveName;
};

btn.addEventListener("click", function() {
    msg.innerText = "";
})