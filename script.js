let body = document.querySelector("body");
let footer = document.querySelector(".footer");
let share = document.querySelector(".share-hide");
let profile = document.querySelector(".profile");
let icon = document.querySelector(".icon"); 
let pop = document.querySelector(".pop-up")
let iconImage = document.querySelector(".fill");

icon.addEventListener('click',() =>{
    footer.classList.toggle("dark");
    share.classList.toggle("share-show");
    profile.classList.toggle("hidden");
    pop.classList.toggle("pop-show");
    iconImage.classList.toggle("filter");
    // icon.classList.toggle("dark-icon");
})