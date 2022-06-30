const html = document.documentElement
const canvas = document.querySelector('.sequence')
const context = canvas.getContext('2d')

const frameCount = 200

const currentFrame = index => (
    `assets/${index.toString().padStart(4, '0')}.webp`
)

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
}

canvas.height = 2400;
canvas.width = 1600;
const img = new Image()
img.src = currentFrame(1)
img.onload = function () {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(img, 0, 0)
}

const updateImage = index => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0,)
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop
    const maxScrollTop = html.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))

    requestAnimationFrame(() => updateImage(frameIndex + 1))
})

preloadImages()