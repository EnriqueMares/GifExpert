import React, {useState} from 'react'

export const AddCategoryEvent = ({ onNewCategory }) => {   
    const [inputValue, setInputValue] = useState(['']);

    const onInputValue = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim()); // Lógica del control
        setInputValue(''); // Limpieza del control
    }

  return (
    <form onSubmit= { (event) => onSubmit(event) }>
        <input
            type='text'
            id='txtCategoria'
            placeholder='Buscar gifts (Event)'
            value={ inputValue } 
            onChange = {(event) => onInputValue (event) }
        />
    </form>    
  )
}
