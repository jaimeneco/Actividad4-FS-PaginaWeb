import { useState, useEffect } from "react";
import './carrusel.css';

export const Carrusel = ({ imageList, autoPlay=false }) => {

    const [idx, setIdx] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect( ()=> {
        console.log("useEffect");
        if(!autoPlay || isPaused) return;

        const idx = setInterval( ()=> {
            handleNext();
        },1000);

        return() => {
            clearInterval(idx)
        }

    }, [idx, autoPlay]);
    
    // Botón Prev:
    const handlePrev = () => {
        const prevIndice = (idx === 0) ? imageList.length - 1 : idx - 1;
        setIdx(prevIndice);
    }

    //Botón Next:
    const handleNext = () => {
        const sigIndice = (idx === imageList.length -1) ? 0 : idx + 1;
        setIdx(sigIndice);
    }

    //Indicadores:
    const handleGoToSlide = (idx) => {
        setIdx(idx);
    }


    

    return (
        // onMouseEnter={} onMouseLeave={}
        <div className="carrusel" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>

            <div className="carrusel-container" style={{ transform: `translateX(-${idx * 100}%)`}}>
                {
                    imageList.map( (image, idx) => (
                        <div className="carrusel-slide" key={idx}>
                            <img src={image} alt={`imagen ${idx+1}`} />
                        </div>
                    ))
                }
            </div>
            <div className="carrusel-controls">
                <button className="carrusel-btnPrev" onClick={handlePrev}>Anterior</button>
                <button className="carrusel-btnNext"onClick={handleNext}>Siguiente</button>
            </div>
            <div className="carrusel-indicators">
                {imageList.map ( (image, idx) =>(
                    <button key={idx}
                        onClick={()=> handleGoToSlide(idx)}
                        >{idx+1}</button>

                )   )}
            
            </div>
        </div>
            );
}