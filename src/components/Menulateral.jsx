import { Link } from "react-router-dom";
import logoBlanc from '../assets/logo-blanc-removebg.png';
import styles from './Menulateral.module.css'

function Menulateral() {
    return (
        <>
            <section className={styles.menu}>
                <div className={styles.logo}>
                    <img src={logoBlanc} alt="logo en blanc" />
                </div>
                <nav>
                    <div className={styles.pagesAdmin}>
                        <Link to="/administrateur"> Tableau de bord </Link>
                        <Link to="/administrateur/article"> Article </Link>
                        <Link to="/administrateur/commentaire"> Commentaire </Link>
                        <Link to="/administrateur/galerie"> Galerie photo </Link>
                        <Link to="/administrateur/gestion-personnel"> Gestion du personnel </Link>
                        <Link to="/administrateur/gestion-projet"> Gestion projet </Link>
                    </div>
                    <div className={styles.parametres}>
                        <Link to=""> Tableau de bord </Link>
                        <Link to=""> Article </Link>
                        <Link to=""> Commentaire </Link>
                    </div>
                </nav>

            </section>
        </>
    )
}
export default Menulateral