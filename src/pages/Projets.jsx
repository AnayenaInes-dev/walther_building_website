import projet1 from '../assets/project-to-be-resized-5-768x511.jpg'
import projet2 from '../assets/project-to-be-resized.jpg'
import projet3 from '../assets/project-to-be-resized-4-768x512.jpg'
import projet4 from '../assets/project-to-be-resized-7-768x512.jpg'
import projet5 from '../assets/project-to-be-resized-6-768x512.jpg'
import projet6 from '../assets/project-to-be-resized-768x512.jpg'
import styles from '../styles/Projets.module.css'

function Projets() {
    return (
        <>
            <section className={styles.banniere}>
                <h1> Projets </h1>
                <p>
                    Chez Walther Building, nous sommes fiers de réaliser
                    des projets de construction de qualité supérieure qui
                    résiste à l'épreuve du temps. Explorez notre portefeuille
                    d'œvres achevées et voyez pourquoi les clients nous font
                    confiance avec leurs besoins en matière de construction.
                </p>
            </section>

            <section className={styles.grille}>
                <div className={styles.categories}>
                    <button> Tous les projets </button>
                    <button> Projets résidentiels </button>
                    <button> Projets Commerciaux </button>
                    <button> Rénovations </button>
                    <button> Projets en cours </button>
                </div>
                <div className={styles.cartes}>

                    <div className={styles.projet} id="1">
                        <div className={styles.image}>
                            <img src={projet1}  alt="photo d'un bureau" />
                        </div>
                        <h4> Duplex </h4>
                        <button> Consulter </button>
                    </div>
                    <div className={styles.projet} id="2">
                        <div className={styles.image}>
                            <img src={projet2}  alt="photo d'un bureau" />
                        </div>
                        <h4> Maison </h4>
                        <button> Consulter </button>
                    </div>
                    <div className={styles.projet} id="3">
                        <div className={styles.image}>
                            <img src={projet3}  alt="photo d'un bureau" />
                        </div>
                        <h4> Duplex </h4>
                        <button> Consulter </button>
                    </div>
                    <div className={styles.projet} id="4">
                        <div className={styles.image}>
                            <img src={projet4}  alt="photo d'un bureau" />
                        </div>
                        <h4> Projet en cours </h4>
                        <button> Consulter </button>
                    </div>
                    <div className={styles.projet} id="5">
                        <div className={styles.image}>
                            <img src={projet5}  alt="photo d'un bureau" />
                        </div>
                        <h4> Maison </h4>
                        <button> Consulter </button>
                    </div>
                    <div className={styles.projet} id="6">
                        <div className={styles.image}>
                            <img src={projet6}  alt="photo d'un bureau" />
                        </div>
                        <h4> Résidence </h4>
                        <button> Consulter </button>
                    </div>
                </div>
            </section>

            <section className={styles.appelAction}>
                <div>
                    <h4> Inspiré par notre travail ? </h4>
                    <p>
                        Contactez-nous dès aujourd'hui pour discuter de
                        votre projett et obtenir un devis gratuit!
                    </p>
                    <button> Demander un devis </button>
                </div>
            </section>
        </>
    )
}
export default Projets