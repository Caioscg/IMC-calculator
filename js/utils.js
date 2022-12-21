export function imcCalc() {
    return weight.value/((height.value/100) ** 2)
}

export function notANumber (value) {
    return isNaN(value) || value == ""
}