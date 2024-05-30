let textValue

let specChar = ['\n']
let lastProcessed = []

function processString(string) {
    lastProcessed.push("--[ String to lua generating ]--")

    let lineSep = string.split("\n")
    lineSep.forEach((sig) => {
        lastProcessed.push(`print("${sig}")`)
        // console.log(`Pushed ${sig}`)
    })

    lastProcessed.push("--[ Finished Generating ]--")

    let returnString = ""
    lastProcessed.forEach((line) => {
        returnString.concat(line)
    })
}

function loadEditor() {
    const textInput = document.getElementById("textInput")
    const sidebar = document.getElementById("sidebar")

    textInput.addEventListener("keyup", event => {
        const lines = event.target.value.split("\n").length

        sidebar.innerHTML = Array(lines)
            .fill("<span></span>")
            .join("")
    })

    textInput.addEventListener('keydown', event => {
        if (event.key == "Tab") {
            const start = textInput.selectionStart
            const end = textInput.selectionEnd

            textInput.value = textInput.value.substring(0, start) + "\t" + textInput.value.substring(end)
            textInput.selectionStart = textInput.value.substring(0, start).length + 1;
            textInput.selectionEnd = textInput.value.substring(0, start).length + 1;
            textInput.focus()

            event.preventDefault()
        }
    })

    // Show the textarea once finished setting up
    document.querySelector(".line").style.display = "inline-flex";
    textInput.style.display = "inline-flex";
}

function loadClick() {
    let textInput = document.getElementById('textInput')

    document.querySelector('.buttonContainer').style.display = "none";
    
    loadEditor()
}

function submit() {
    const textInput = document.getElementById("textInput")
    textValue = textInput.value
    
    console.log(`// UNFORMATED: \n\n${textValue}\n\n // END`)
    let newString = processString(textValue)
    console.log("Finished processing.")
}

// var blob = new Blob(["Hello world!"], { type: "text/plain;charset=utf-8"});
// saveAs(blob, "hello.txt")
