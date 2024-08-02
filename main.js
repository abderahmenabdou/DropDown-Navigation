function dropDown(){
    let dropDown = document.getElementById("dropDown");
    let one = document.getElementById("one")
    dropDown.classList.toggle("drop")
}
function dropDown2(){
    let dropDown2 = document.getElementById("dropDown2");
    dropDown2.classList.toggle("drop")
}

function menuBar(){
    let open = document.getElementById("open")
    let closed = document.getElementById("closed")
    let menu = document.getElementById("menu")
    
    open.classList.toggle("open")
    closed.classList.toggle("closed")
    menu.classList.toggle("ctn")
}