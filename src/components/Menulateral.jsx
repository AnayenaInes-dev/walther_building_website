import { Link } from "react-router-dom";
import logoBlanc from '../assets/logo-blanc-removebg.png';
import styles from './Menulateral.module.css'

function Menulateral() {
    return (
        <>
            <section className={styles.menu}>
                <div className={styles.logo}>
                    <img src={logoBlanc} alt="" />
                </div>
                <nav>
                    <div className={styles.pagesAdmin}>
                        <Link to=""> Tableau de bord </Link>
                        <Link to=""> Article </Link>
                        <Link to=""> Commentaire </Link>
                        <Link to=""> Galerie photo </Link>
                        <Link to=""> Gestion du personnel </Link>
                        <Link to=""> Gestion projet </Link>
                    </div>
                    <div className={styles.pagesAdmin}>
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