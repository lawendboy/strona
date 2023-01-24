const box = document.querySelector(".snieg");

function Generate(){
    const element = document.createElement("img");
    element.classList += "snow";
    element.src = "./snowflake.gif";
    element.style.left = Math.random() * 90 + "vw";
    box.appendChild(element);
    setTimeout(() => {
        box.removeChild(element);
    }, 10000);
    
}

setInterval(() => {
    Generate();
}, 600);