let increase = document.querySelectorAll(".increase_price")
let decrease = document.querySelectorAll(".decrease_price")
let toggle_fav = document.querySelectorAll(".toggle_fav")
let remove_product = document.querySelectorAll(".remove_product")

calculate()

for (let btn_increase of increase) {
    btn_increase.addEventListener("click", (e) => {
        let quantity = e.target.parentElement.querySelector(".quantity")
        let price = e.target.parentElement.parentElement.querySelector('.price')
        quantity.innerHTML++
            price.innerHTML = price.getAttribute("data-price") * quantity.innerHTML
        calculate()
    })
}

for (let btn_decrease of decrease) {
    btn_decrease.addEventListener("click", (e) => {
        let quantity = e.target.parentElement.querySelector(".quantity")
        let price = e.target.parentElement.parentElement.querySelector('.price')
        if (quantity.innerHTML > 0) {
            quantity.innerHTML--
                price.innerHTML = price.getAttribute("data-price") * quantity.innerHTML
            calculate()
        }
    })
}

for (let fav of toggle_fav) {
    fav.addEventListener("click", (e) => {
        const heart = e.target.classList.replace('far', 'fas')
        if (!heart)
            e.target.classList.replace('fas', 'far')
    })
}

for (let product of remove_product) {
    product.addEventListener("click", (e) => {
        if (confirm("Are you sure you want to remove this item?")) {
            e.target.parentElement.parentElement.remove()
            calculate()
        } else {
            return false
        }
    })
}

function calculate() {
    let prices = Array.from(document.querySelectorAll('.price'))
    let total = document.querySelector('#total')
    let s = 0
    for (price of prices) {
        s += (price.innerHTML * 1)
    }
    total.innerHTML = s + " Dinars"
}


