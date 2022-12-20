const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const form = document.querySelector("form")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const h1 = document.querySelector(".screen2 h1")
const pop = document.querySelector(".close")

let imc


form.addEventListener("submit", (e) => {
    e.preventDefault()
    imcCalc()
})

pop.addEventListener("click", restart)

function imcCalc() {
    imc = weight.value/((height.value/100) ** 2)
    
    screen2.classList.add("open")
    h1.innerText = `Seu IMC é de ${imc.toFixed(2)}`
}

function restart() {
    weight.value = ""
    height.value = ""
    screen2.classList.remove("open")
}
