//import React, { useState ,useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images ,loading}=useFetchGifs(category);

    console.log(loading);
    

/*
const [images, setImages] = useState([]);

useEffect( ()=>{

   getGifs(category)
   .then(setImages)//el metodod setImages ya pone por defecto el valor que se le pasa
},[category])
*/
//el corchete vacio, significa que solo quiero que busque la informacion,
//cuando el componente se renderize por primera vez

//cuando la informacion del array cambie, se renderizara de nuevo

/*
    const getGifs=async()=>{

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

        console.log(gifs);

        setImages(gifs)
    }
*/
    //getGifs();


    return (

        <>
         <h3 className="animate__animated animate__fadeIn">{category}</h3>

         {
         //loading ? <p>Loading</p> : null
         //con && solo valida si es true
         loading && <p className="animate__animated flash">Loading</p> 
         }
        <div className="card-grid">
           

        
            
            {
               
                images.map( img=>(//o podia llamarse {img, title}
                    <GifGridItem 

                       key={img.id}
                        {...img}//esto hace que los valores tomen el valor de propiedad
                    
                    />
                ))

            }
               
            
        </div>
        </>
    )
}
