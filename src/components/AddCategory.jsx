import React, {useState} from 'react'

export const AddCategory = ({ setCategories, categories }) => {   
    const [inputValue, setInputValue] = useState(['']);

    const onInputValue = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        if (categories.includes(inputValue.trim())) return; // Búsqueda rápida de repetidos sin distinguir mayúsculas y minúsculas

        setCategories(categories => [ inputValue.trim(), ...categories ]); // Lógica del control
        setInputValue(''); // Limpieza del control
    }

  return (
    <form onSubmit= { (event) => onSubmit(event) }>
        <input
            type='text'
            id='txtCategoria'
            placeholder='Buscar gifts'
            value={ inputValue } 
            onChange = {(event) => onInputValue (event) }
        />
    </form>    
  )
}
