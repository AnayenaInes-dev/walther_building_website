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
                    <div>
                        <img src={localisation} alt="icône localisation" />
                        <p>Simbock, Yaoundé</p>
                    </div>
                    <div>
                        <img src={enveloppe} alt="icône enveloppe" />
                        <p> waltherbuilding@gmail.com </p>
                    </div>
                    <div>
                        <img src={telephone} alt="icône telephone" />
                        <p> +237 699 89 68 85 </p>
                    </div>
                </div>
                <div className="reseauxS">
                    <h3> Réseaux Sociaux </h3>
                    <img src={facebook} alt="icone facebook" />
                    <img src={whatsapp} alt="icone whatsapp" />
                    <img src={linkedin} alt="icone linkedin" />
                    <img src={x} alt="icone x" />
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