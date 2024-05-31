let textValue

let specChar = ['\n']
let lastProcessed = []

function processString(string) {
    lastProcessed.push("--[ String to lua generating ]--\n ")

    let lineSep = string.split("\n")
    lineSep.forEach((sig) => {
        lastProcessed.push(`print("${sig}")`)
        // console.log(`Pushed ${sig}`)
    })

    lastProcessed.push("\n--[ Finished Generating ]--")

    let returnString = new String
    for (i = 0; i < lastProcessed.length; i++) {
        let nextCnct = lastProcessed[i]
        if (i != lastProcessed.length) {
            nextCnct += '\n'
        }

        // console.log(nextCnct)

        returnString += nextCnct
        console.log(returnString)
    }
    // console.log(returnString)
    return returnString
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
    document.querySelector(".center2").style.display = "flex";
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

    // console.log(newString)
}

// var blob = new Blob(["Hello world!"], { type: "text/plain;charset=utf-8"});
// saveAs(blob, "hello.txt")
