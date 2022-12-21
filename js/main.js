import { Modal } from './modal.js'
import { alert } from './alert-error.js'
import { imcCalc, notANumber } from './utils.js'

const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const form = document.querySelector("form")

let imc

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const alertError = notANumber(weight.value) || notANumber(height.value)

    if (alertError) {
        alert.open()
        
        weight.oninput = () => alert.close()
        height.oninput = () => alert.close()
        
        return
    }

    imc = imcCalc()

    Modal.open()
    Modal.h1.innerText = `Seu IMC é de ${imc.toFixed(2)}`

})


