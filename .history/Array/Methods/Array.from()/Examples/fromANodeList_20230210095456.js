// Create an array based on a property of DOM Elements
const images = document.querySelectorAll('img')
const sources = Array.from(images, image => image.src)
const insecureSources = sources.filter(link => link.startsWith('http://'))
