const preloaderContainer = document.querySelector('#preloader-container')

document.body.style.overflow="hidden"
setTimeout(function(){
    preloaderContainer.classList.add("fade-out")
}, 2000);