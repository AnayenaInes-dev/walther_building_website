import { Link } from "react-router-dom";
import logoBlanc from '../assets/logo-blanc-removebg.png';
import './Footer.css';

function Footer() {
    return(
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
                    <ul>
                        <li>
                            <span></span> Simbock, Opposite Mario, Yaoundé
                        </li>
                        <li>
                            <span></span> waltherbuilding@gmail.com
                        </li>
                        <li>
                            <span></span> +237 699 89 68 85
                        </li>
                    </ul>
                </div>
                <div className="reseauxS">
                    <h3> Réseaux Sociaux </h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
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