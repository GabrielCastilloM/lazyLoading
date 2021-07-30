import { registerImage } from './lazy.js'

//funcion random para cambiar el numero de la imagen
//segun la api https://randomfox.ca/
const max = 1
const min = 122
const random = () => Math.floor(Math.random() * (max - min))+ min

//crear una  nodo con imagen
const createImageNode = () => {
    //creo elemento div padre llamado imageWrapper
    const imageWrapper  = document.createElement('div')
    imageWrapper .className = 'p-4'
    //creo elemeto img
    const imagen = document.createElement('img')
    imagen.className = "mx-auto rounded-md bg-gray-300 "
    imagen.width = '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
    //le adjunto la imagen al elemento div en este caso imageWrapper que es el padre
    imageWrapper.append(imagen)

    return imageWrapper
}
//div padre de imagenes
const mountNodo = document.querySelector('#imagenes')
//botones
const addButton = document.querySelector('#addButton')
const deleteButtonOne = document.querySelector('#deleteButtonOne')
const deleteButtonAll = document.querySelector('#deleteButtonAll')

const addImage = () => {
    const nuevaImagen = createImageNode()
    mountNodo.append(nuevaImagen)
    registerImage(nuevaImagen)
}

const deleteAllImage = () => {
    const imagenes = [...mountNodo.childNodes]
    const arrayImagenes = Array.from(imagenes)
    arrayImagenes.forEach(imagen => imagen.remove())
}

const deleteImagenOne = () => {
    const imagenes = [mountNodo.firstChild]
    const arrayImagenes = Array.from(imagenes)
    arrayImagenes == "" ? alert('No hay imagenes para limpiar') : arrayImagenes.forEach(imagen => imagen.remove())

}

addButton.addEventListener('click', addImage)
deleteButtonOne.addEventListener('click', deleteAllImage)
deleteButtonAll.addEventListener('click', deleteImagenOne)