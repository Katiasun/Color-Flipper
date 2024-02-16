const colors = ["green","red","rgba(133,122,200","#f15025","yellow","#19E5E5","#367512","#008080","F08080","Chocolate","OrangeRed","F5F5DC" ];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //get random number between 0-3 colors[i]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}