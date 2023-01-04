(()=>{

    let imgs = document.querySelectorAll(".previewImg");
    let buttons = document.querySelectorAll(".selection");
    let path = "./../zegarki/"
    let names = [
        "meski",
        "damski",
        "dzieciecy",
        "mlodziezowy"
    ]

    buttons[0].addEventListener('click', ()=>{
        let a = 1;
        imgs.forEach(element => {
            element.src = path + "meski" + a++ + ".jpg"
        })
    })
    buttons[1].addEventListener('click', ()=>{
        let a = 1;
        imgs.forEach(element => {
            element.src = path + "damski" + a++ + ".jpg"
        })
    })
    buttons[2].addEventListener('click', ()=>{
        let a = 1;
        imgs.forEach(element => {
            element.src = path + "dzieciecy" + a++ + ".jpg"
        })
    })
    buttons[3].addEventListener('click', ()=>{
        let a = 1;
        imgs.forEach(element => {
            element.src = path + "mlodziezowy" + a++ + ".jpg"
        })
    })

    let a = 1;
    imgs.forEach(element => {
        element.src = path + "meski" + a++ + ".jpg"
    })

})();