import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
// import { AddCategoryEvent } from './components/AddCategoryEvent';
import { GifGridApp } from './components/GifGridApp';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch','Dragon Ball','Ranma']);

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return; // Búsqueda rápida de repetidos sin distinguir mayúsculas y minúsculas
    setCategories([newCategory,...categories]);
  }

  return (
    <Fragment>
        
        <h1> GifExpertApp </h1> {/* título */}
        <AddCategory setCategories = { setCategories } categories = {categories} /> {/* Input */} { /* Enfoque envío de props */} 
        {/*<AddCategoryEvent onNewCategory = { (value) => onAddCategory (value) } />*/} {/* Input */}  { /* Enfoque emisión de eventos */}
        {/* Listado de Gif */}
        {
          categories.map( (category) => (
            <GifGridApp key = { category } category = {category} />
          ))
        }
        {/* Items */}
    </Fragment>
  )
}
