import { Link } from "react-router-dom";
import './Entete.css';
import Logo from '../assets/logo-removebg.png';

function Entete() {
    return(
        <header className='entete'>
            <div className="logo">
                <img src={Logo} width="80" height="58" alt="Logo-Walther-Building" />
            </div>
            <nav className='navbar'>
                <Link to="/"> Accueil </Link>
                <Link to="/Apropos"> Accueil </Link>
                <Link to="/Services"> Services </Link>
                <Link to="/Projets"> Projets </Link>
                <Link to="/Blog"> Blog </Link>
                <Link to="/Contacts"> Contacts </Link>
                <Link to="/Galerie"> Galerie </Link>
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