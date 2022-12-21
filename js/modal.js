const weight = document.querySelector("#weight")
const height = document.querySelector("#height")

export const Modal = {

    screen2: document.querySelector(".screen2"),
    h1: document.querySelector(".screen2 h1"),
    pop: document.querySelector(".close"),

    open() {
        Modal.screen2.classList.add("open")
    },

    close() {
        Modal.screen2.classList.remove("open")
        weight.value = ""
        height.value = ""
    }

}

Modal.pop.addEventListener("click", Modal.close)

window.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') {
        Modal.close()
    }
})