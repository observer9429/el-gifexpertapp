import React, { useState } from 'react'

import PropTypes from "prop-types"

export const AddCategory = ({setcategoria}) => {

const [inputValue, setinputValue] = useState('');

const handleInputChange=(e)=>{
    console.log(e.target.value)

    setinputValue(e.target.value);
}

const handleSubmit=(e)=>{

    e.preventDefault();

    //como esta funcion es un callBack, se le regresa automaticamente algo, lo que puede ser su valor
    //del array, lo usamos sin necesidad de pasarselo por parametros
    
    if(inputValue.trim().length>2){

        setcategoria(cats=>[inputValue,...cats]);
        setinputValue('');
    }

    } 

    return (
        //<>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}

                onChange={handleInputChange}
            />
            </form>
        //</>
    )
}

AddCategory.propTypes={
    setcategoria:PropTypes.func.isRequired
}


