function getImagePromise(url){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.alt = `Image generated making use of promises of Javascript concepts`
            img.addEventListener('load',() => resolve(img))
            img.addEventListener('error',() => reject(new Error(`Failed to load images: ${url}`)))
        },500)
    })
}

const images = [
      'https://wallpapercave.com/wp/wp7477462.jpg',
      'https://wallpapercave.com/wp/wp7477462.jpg',
      'https://wallpapercave.com/wp/wp7477462.jpg'
]
async function preloadImages(imageUrlsArr){
    const imageContainer = document.getElementById('imgContainer')
    const uploadContainer = document.getElementById('uploadContainer')
    const promises = imageUrlsArr.map((url) => getImagePromise(url))
    try{
        const result = await Promise.all(promises)
        console.log('All images uploaded successfully')
        uploadContainer.style.display = 'none'
        result.forEach((img) => imageContainer.appendChild(img) )
    }catch(error){
        console.log(error)
    }
}

preloadImages(images)
