import photo1 from '../assets/devis-et-plan.png'
import photo2 from '../assets/conception-architecturale.png'
import photo3 from '../assets/peinture.jpg'
import photo4 from '../assets/project-to-be-resized.jpg'
import photo5 from '../assets/panneau-solaire.png'
import photo6 from '../assets/project-to-be-resized-5-768x511.jpg'
import photo7 from '../assets/walther-hero-2.jpg'
import photo8 from '../assets/projet-chantier.jpg'
import photo9 from '../assets/project-to-be-resized-768x512.jpg'
import '../styles/Galerie.css'

function Galerie() {
     return(
        <>
            <section className="banniere-galerie">
                <hgroup>
                    <h1> Galerie photo </h1>
                    <p>
                        Irure est occaecat nisi Lorem.
                        Anim nisi culpa laboris qui adipisicing sunt commodo.
                        Velit culpa pariatur esse deserunt ad esse.
                    </p>
                </hgroup>
            </section>
            <section className="photos">
                <div className="galerie">
                    <img src={photo1} width="300" height="200" alt="" />
                    <img src={photo2} width="300" height="200" alt="" />
                    <img src={photo3} width="300" height="200" alt="" />
                    <img src={photo4} width="300" height="200" alt="" />
                    <img src={photo5} width="300" height="200" alt="" />
                    <img src={photo6} width="300" height="200" alt="" />
                    <img src={photo7} width="300" height="200" alt="" />
                    <img src={photo8} width="300" height="200" alt="" />
                    <img src={photo9} width="300" height="200" alt="" />
                </div>
            </section>
        </>
    )
}
export default Galerie