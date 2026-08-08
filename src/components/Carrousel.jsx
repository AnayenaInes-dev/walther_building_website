import { useState } from "react";
import photo1 from '../assets/project-to-be-resized-768x512.jpg'
import photo2 from '../assets/project-to-be-resized.jpg'
import photo3 from '../assets/project-to-be-resized-6-768x512.jpg'
import photo4 from '../assets/project-to-be-resized-5-768x511.jpg'
import photo5 from '../assets/project-to-be-resized-4-768x512.jpg'
import photo6 from '../assets/project-to-be-resized-7-768x512.jpg'
import './Carrousel.css'

function Carrousel() {
    const [indexActuel, setIndexActuel] = useState(0)
    const photos = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6
    ]
    return(
        <>
            <div className="carrousel">
                <div className="galerie">
                    <img src={photos[indexActuel]} alt="image numéro ${indexActuel+1}" />
                </div>
                <br />
            </div>
            <div className="btns">
                {photos.map((Element,index)=> (
                    <button key={index} onClick={() => setIndexActuel(index)}> 
                        {/* {index+1}  */}
                    </button>
                ))}
            </div>
        </>
    )
}
export default  Carrousel