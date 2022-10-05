const value = document.getElementById("value")
const decreaseBtn = document.querySelector(".decrease")
const resetBtn = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")
let number = 0

decreaseBtn.addEventListener("click", () => {
    number--
    value.textContent = number
    if (number < 0) {
        value.style.color = "red"
    }
})

resetBtn.addEventListener("click", () => {
    number=0
    value.textContent = number
    if (number === 0) {
        value.style.color = "#222"
    }
})

increaseBtn.addEventListener("click", () => {
    number++
    value.textContent = number
    if (number > 0) {
        value.style.color = "green"
    }
})
