import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGridApp = ({ category }) => {
    const {images, isLoading } = useFetchGifs(category);
    // UseEfect (Teoría) -- Aunque funciona se terminó cambiando por un hook personalizado (useFetchGifs)
    // const [images, setImages] = useState([]);
    // La función getGifs no se colocó directamente aquí para que el componente no lo reprocesara
    // Colocar una llamada aquí es lo mismo que definir la función directamente
    
    // UseEfect con función auxiliar
    /* 
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    },[]);
    */

    // UseEfect sin llamada auxiliar
    /*
    useEffect(() => {
        getGifs(category)
        .then( newImages => setImages (newImages)); //.then( newImages => setImages (newImages)); // De manera directa no soporta el await
    }, []) //[] Dejar la referencia vacía ([]) implica que solo se ejecutará 1 sola vez en su vida
    */ 
   
    return (
        <>
            <h3> { category} </h3>
            {
                isLoading && <h2> Cargando... </h2>
            }
            <div className = "card-grid">
                {
                    images.map((image) => (
                        <GifGridItem 
                            key = { image.id } 
                            {...image} // Te permite enviar todas las propiedades de un solo golpe 
                        />
                    )) 
                }
            </div>
        </>
    )
}