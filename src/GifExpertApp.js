//import PropTypes from "prop-types"
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const ElGifExpertApp=({elArticle})=>{


    //const categorias=['Pokemon','Inuyasha','Dragon ball'];

    //useState
    const [categoria, setcategoria] = useState(['Pokemon'])

    



    return (
        <>

        <h2>Este es el GifExpertApp</h2>

        <AddCategory setcategoria={setcategoria}/>
        <hr />
 
        
        <ol>
            {
                /*
                categoria.map(laCategoria=>{
                    return <li key={laCategoria}>{laCategoria}</li>
                })*/


                categoria.map(category=>(
                    <GifGrid 
                        
                        key={category}
                        category={category}

                    />
                ))
            }
        </ol>

        <p>{elArticle}</p>

        

        </>
    )

}

ElGifExpertApp.defaultProps={
    elArticle:"Sin novedades"
}

export default ElGifExpertApp;