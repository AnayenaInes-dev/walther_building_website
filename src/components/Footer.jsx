import { Link } from "react-router-dom";
import localisation from '../assets/icons8-location-100.png'
import enveloppe from '../assets/icons8-letter-100-outline.png'
import telephone from '../assets/icons8-téléphone-100-outline.png'
import whatsapp from '../assets/icons8-whatsapp-100.png'
import linkedin from '../assets/icons8-linkedin-100.png'
import facebook from '../assets/icons8-facebook-f-100.png'
import x from '../assets/icons8-x-100.png'
import logoBlanc from '../assets/logo-blanc-removebg.png';
import './Footer.css';

function Footer() {
    return (
        <footer className='pieddepage'>
            <section className="info">

                <div className="logo">
                    <img src={logoBlanc} width="280" height="180" alt="Logo-Walther-Building" />
                </div>
                <div className="liens">
                    <Link to="/apropos"> A propos </Link>
                    <Link to="/services"> Services </Link>
                    <Link to="/projets"> Projets </Link>
                    <Link to="/blog"> Blog </Link>
                </div>
                <div className="contacts">
                    <h3> Contacts </h3>
                    <p> <span> <img src={localisation} alt="icône localisation" /> </span> Simbock, Opposite Mario, Yaoundé</p>
                    <p> <span> <img src={enveloppe} alt="icône enveloppe" /> </span> waltherbuilding@gmail.com </p>
                    <p> <span> <img src={telephone} alt="icône telephone" /> </span> +237 699 89 68 85 </p>
                </div>
                <div className="reseauxS">
                    <h3> Réseaux Sociaux </h3>
                    <ul>
                        <li> <img src={facebook} alt="icone facebook" /> </li>
                        <li> <img src={whatsapp} alt="icone whatsapp" /> </li>
                        <li> <img src={linkedin} alt="icone linkedin" /> </li>
                        <li> <img src={x} alt="icone x" /> </li>
                    </ul>
                </div>
            </section>
            <hr />
            <section className="copyright">
                <p> Copyright @ 2026 Walther Building Services </p>
            </section>
        </footer>
    )
}
export default Footer