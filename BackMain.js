
let h, w
h = document.documentElement.clientHeight
w = document.documentElement.clientWidth

console.log(h, w)


function loadClick() {
    let textInput = document.getElementById('textInput')

    document.getElementById('load').style.display = "none";
    textInput.style.display = "block";
    textInput.rows = h/19
    textInput.cols = w/10
}