const preloaderContainer = document.querySelector('#preloader-container')

document.body.style.overflow="hidden"
setTimeout(function(){
    preloaderContainer.classList.add("fade-out");
    preloaderContainer.style.display = "none";
}, 2000);
