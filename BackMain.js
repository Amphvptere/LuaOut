let h, w
h = document.documentElement.clientHeight
w = document.documentElement.clientWidth

console.log(h, w)



function loadClick() {
    let textInput = document.getElementById('textInput')

    document.getElementById('load').style.display = "none";
    document.querySelector('.center').style.display = "none";
    textInput.style.display = "block";


    let r = h/19
    for (let i = 0; i < r; i++) {
        let newRow = document.createElement("p")
        newRow.innerHTML = i+1; newRow.id = "colItem"; newRow.style.height = String(textInput.clientHeight/r).concat("px");
        console.log(String(textInput.clientHeight/r).concat("px"))
        document.getElementById('col').appendChild(newRow)
    }

    textInput.rows = r
    textInput.cols = w/10
}
