export const alert = {
    error: document.querySelector(".alert-error"),

    open() {
        alert.error.classList.add("open")
    },
    close() {
        alert.error.classList.remove("open")
    }
}