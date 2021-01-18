const images = document.querySelectorAll('img')
const slider = document.querySelector('.slider')

let options = {
    root: slider,
    rootMargin: '0px 100px 0px 0px',
    threshold: 1
}

const slideObserver = new IntersectionObserver(callback = (entries, slideObserver) => {
    entries.forEach(entry => {
        console.log(entry)
        if (!entry.isIntersecting) return
        const image = entry.target
        const newUrl = image.getAttribute('data-src')
        image.src = newUrl
        slideObserver.unobserve(image)
    });
}, options)

images.forEach(image => {
    slideObserver.observe(image)
})
