import { Modal } from './modal.js'

const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const form = document.querySelector("form")
const screen1 = document.querySelector(".screen1")

let imc

form.addEventListener("submit", (e) => {
    e.preventDefault()
    imcCalc()
})

function imcCalc() {
    imc = weight.value/((height.value/100) ** 2)
    Modal.open()
    Modal.h1.innerText = `Seu IMC é de ${imc.toFixed(2)}`
}

function restart() {
    weight.value = ""
    height.value = ""
}
