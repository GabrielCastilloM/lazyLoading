
  let imagenesCargadas = 0
  let imagenesTotales =  0

const isIntersecting = (entry) => {
    return entry.isIntersecting
}
//cargar imagen
const loadImage = (entry) => {
    const container = entry.target
    const imagen = container.firstChild
    const url = imagen.dataset.src
    imagenesCargadas += 1;
    estados()
    //cargue la imagen
    imagen.src = url
    //desregistrar la imagen
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
})

export const registerImage = (imagen) => {
// IntersectionObserver -> observer(imagen)
observer.observe(imagen)
imagenesTotales += 1;
estados()
}

const estados = () => {
    console.log(`⚪️ Total Imágenes: ${imagenesTotales}`);
    console.log(`🟣 Imágenes cargadas: ${imagenesCargadas}`);
    console.log('_________________________________');
}
