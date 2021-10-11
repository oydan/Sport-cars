const slides = document.querySelectorAll('.slide')
for (const slide of slides){
    slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
    })

    slide.addEventListener('click', () => {
        slide.classList.add('opacity')
    })
    
    slide.addEventListener('mouseleave', () => {
        slide.classList.remove('opacity')
    })

}

function clearActiveClasses() {
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })

}

