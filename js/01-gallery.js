import { galleryItems } from './gallery-items.js';
console.log(galleryItems)


const gallery = document.querySelector('.gallery')
const galleryEl = []

galleryItems.forEach(el => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item'

	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = el.original

	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = el.preview
    galleryImage.setAttribute('data-source', el.original)
    galleryImage.alt = el.description


	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	galleryEl.push(galleryItem)
})

	gallery.append(...galleryEl)

	gallery.addEventListener('click', el => {
    	el.preventDefault()
    	if (el.target.nodeName !== 'IMG') {
	}

    const images = el.target.getAttribute('data-source')

    const lightBox = basicLightbox.create(`<img src='${images}'>`)
    
	lightBox.show()
    
    gallery.addEventListener('keydown', el => {
		if (el.key === 'Escape') {
			lightBox.close()
		}
	})
})
