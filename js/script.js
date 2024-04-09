const navSelector = document.querySelector("#mynav");

navSelector.addEventListener('click', function() {
    console.log('You clicked the nav');
})

const buttonSelector = document.querySelector("#theme_button");

buttonSelector.addEventListener('click', function() {
    document.querySelector("body").classList.toggle("dark");
})