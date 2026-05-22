let current = ""
let val1 = 0
let prevopr = "+"
let oprstatus = false

const resfield = document.getElementById("inp")

function calculate(value){

    if(oprstatus){
        current = ""
        oprstatus = false
    }

    if(value=="." && current.includes(".")){
        return
    }

    current += value

    resfield.value = current
}

function perform(opr){

    if(opr=="ac"){

        current = ""
        val1 = 0
        prevopr = "+"

        resfield.value = ""

        oprstatus = false

        return
    }

    if(opr=="clear"){

        current = ""

        resfield.value = ""

        return
    }

    if(opr=="back"){

        current = current.slice(0,-1)

        resfield.value = current

        return
    }

    let val = Number(current || 0)

    if(prevopr=="+"){
        val1 = val1 + val
    }

    else if(prevopr=="-"){
        val1 = val1 - val
    }

    else if(prevopr=="*"){
        val1 = val1 * val
    }

    else if(prevopr=="/"){
        val1 = val1 / val
    }

    if(opr=="="){

        resfield.value = val1

        current = String(val1)

        prevopr = "+"

        val1 = 0
    }

    else{

        resfield.value = val1 + opr

        prevopr = opr

        current = ""
    }

    oprstatus = true
}

function toggleTheme(){

    document.body.classList.toggle("light")

    const btn=document.getElementById("themebtn")

    if(document.body.classList.contains("light")){
        btn.innerText="☀️"
    }
    else{
        btn.innerText="🌙"
    }
}

document.addEventListener("keydown", function(event){

    const key = event.key

    if(key >= "0" && key <= "9"){
        calculate(key)
    }

    else if(key == "."){
        calculate(key)
    }

    else if(key == "+" || key == "-" || key == "*" || key == "/"){
        perform(key)
    }

    else if(key == "Enter"){
        perform("=")
    }

    else if(key == "Backspace"){
        perform("back")
    }

    else if(key == "Delete"){
        perform("clear")
    }
})