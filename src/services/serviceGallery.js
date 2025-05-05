const TOKEN = "FMfbzepBhA9lAvfrJYb87d2xXVWodrH1YKjy7fes6j7rdm8JvMTyfdeM"

export async function getImages(search, quantity, page = 1){
    //Para donde voy
    if (search == ''){
        return { photos: [], total_results: 0}
    }

    const URL = `https://api.pexels.com/v1/search?query=${search}&per_page=${quantity}&page=${page}`

    //Configurar la petición

    let peticion = {
        method: "GET",
        headers: {Authorization:TOKEN}
    }
    
    //3. Consumir el API

    let responseAPI= await fetch(URL,peticion)
    let images = await responseAPI.json()
    return images
} 

export async function fetchByUrl(url) {
    if(!url) return null

    let peticion = {
        method: "GET",
        headers: {Authorization:TOKEN}
    }

    let responseAPI= await fetch(url,peticion)
    let images = await responseAPI.json()
    return images
}

export async function goToPage(search, quantity, page) {
    return getImages(search, quantity, page)
}