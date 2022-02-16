const stepSlider = document.querySelector("#step-slider")
const valueOfStepSlider = document.querySelector("#step-slider-value")
const cardWishlist = document.querySelectorAll(".addto-wishlist")
const cardCart = document.querySelectorAll(".addto-cart")
const toggleSideNav = document.querySelector("#open-side-nav")
const filterProducts = document.querySelector("#filter-product")
const productListing = document.querySelector("#product-listing")
const itemsInWishlist = document.querySelector("#wishlist-items")
const itemsInCart = document.querySelector("#cart-items")
const wishlistPageItems = document.querySelectorAll(".wishlist-page-items")
const wishlistDismissItem = document.querySelectorAll(".wishlist-page-item-dismiss")

valueOfStepSlider.innerHTML = stepSlider.value;
stepSlider.addEventListener("input", ()=>{
    valueOfStepSlider.innerHTML = stepSlider.value;
})

cardWishlist.forEach(icon => {
    icon.addEventListener("click", ()=>icon.style.color !== "var(--st-red)" ? (icon.style.color="var(--st-red)",   itemsInWishlist.innerText = Number(itemsInWishlist.innerText)+1) : (icon.style.color="var(--st-white)",itemsInWishlist.innerText = Number(itemsInWishlist.innerText)-1))
})

cardCart.forEach(buttonCart => {
    buttonCart.addEventListener("click", ()=>buttonCart.style.backgroundColor !== "var(--st-secondary-color)" ?
    (buttonCart.style.backgroundColor="var(--st-secondary-color)", itemsInCart.innerText = Number(itemsInCart.innerText)+1) : (buttonCart.style.backgroundColor="var(--st-primary-color)", itemsInCart.innerText = Number(itemsInCart.innerText)-1))
})

toggleSideNav.addEventListener("click", ()=>filterProducts.classList.toggle("active"))

