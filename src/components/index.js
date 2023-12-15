// Se está definiendo un archivo de barrril
export * from './AddCategory';
export * from './AddCategoryEvent';
export * from './GifGridApp';
export * from './GifGridItem';

// Gracias a esto pasamos de esto:  
// import { AddCategory } from './components/AddCategory';
// import { AddCategoryEvent } from './components/AddCategoryEvent';
// import { GifGridApp } from './components/GifGridApp';
// a esto:
// import { AddCategory, AddCategoryEvent,GifGridApp  } from './components';
// al momento de importar