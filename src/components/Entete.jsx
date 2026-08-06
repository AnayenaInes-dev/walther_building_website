import { Link } from "react-router-dom";
import Logo from '../assets/logo-removebg.png';
import './Entete.css';

function Entete() {
    return(
        <header className='entete'>
            <div className="logo">
                <img src={Logo} width="80" height="58" alt="Logo-Walther-Building" />
            </div>
            <nav className='navbar'>
                <Link to="/"> Accueil </Link>
                <Link to="/apropos"> A propos </Link>
                <Link to="/services"> Services </Link>
                <Link to="/projets"> Projets </Link>
                <Link to="/blog"> Blog </Link>
                <Link to="/contacts"> Contacts </Link>
                <Link to="/galerie"> Galerie </Link>
            </nav>
            <div className="langues">
                <select name="" id="">
                    <option value="">Fr</option>
                    <option value="">En</option>
                </select>
                {/* <button> Fr </button> */}
                {/* <button> En </button> */}
            </div>
        </header>
    )
}
export default Entete;