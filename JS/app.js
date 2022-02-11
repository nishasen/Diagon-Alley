const stepSlider = document.querySelector("#step-slider")
const valueOfStepSlider = document.querySelector("#step-slider-value")
valueOfStepSlider.innerHTML = stepSlider.value;
stepSlider.addEventListener("input", ()=>{
    valueOfStepSlider.innerHTML = stepSlider.value;
})