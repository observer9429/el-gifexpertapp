

export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=dVqIVpEYALrWLE1cqmApjfzlC7NR2rTj`;
    const resp= await fetch(url);
    //desestructuracion data  
    const {data}=await resp.json();

    const gifs=data.map( img=>{

        return{//el signo de interrogacion no es obligatorio
            //solo es para ver si tiene la url de la imagen
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }

    )

    return gifs;

    
}