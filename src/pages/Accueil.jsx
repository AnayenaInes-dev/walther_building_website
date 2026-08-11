import Logo from '../assets/logo-removebg.png'
import iconeMaison from '../assets/icons8-home-100.png'
import iconeMarteau from '../assets/icons8-hammer-100.png'
import iconePanneauSolaire from '../assets/icons8-panneau-solaire.png'
import testiman from '../assets/testi-man.jpg'
import testiwoman from '../assets/testi-woman.jpg'
import Carrousel from '../components/Carrousel.jsx'
import Entete from '../components/Entete.jsx'
import Footer from '../components/Footer.jsx'
import styles from '../styles/Accueil.module.css'

function Accueil() {
    return (
        <>
            <Entete />

            <section className={styles.principale}>
                <div>
                    <h1> Construire votre avenir avec qualité & expertise </h1>
                    <p>
                        Nous livrons des solutions de construction résidentielle
                        et commerciale exceptionnelles pour donner vie à votre  vision.
                    </p>
                    <button> Demander un dévis </button>
                </div>
            </section>

            <section className={styles.apropos}>
                <h1> L'entreprise </h1>
                <div className={styles.logo}></div> <br />
                <div className={styles.texte}>
                    <div id="1">
                        <h3> Notre histoire </h3>
                        <p>
                            Avec des années d'expérience dans l'industrie, nous nous
                            spécialisons dans la construction de haute qualité pour
                            des projets résidentiels, commerciaux et industriels. Notre
                            équipe dévouée s'engage envers l'excellence, la sécurité et
                            la satisfaction des clients.
                        </p>
                    </div>
                    <div id="2">
                        <h3> Pourquoi nous choisir ? </h3>
                        <p>
                            Avec des années d'expérience dans l'industrie, nous nous
                            spécialisons dans la construction de haute qualité pour
                            des projets résidentiels, commerciaux et industriels. Notre
                            équipe dévouée s'engage envers l'excellence, la sécurité et
                            la satisfaction des clients.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.services}>
                <h1>Services</h1>
                <div className={styles.cartes}>
                    <div className={styles.carte} id="1">
                        <div className="icone">
                            <img src={iconeMaison} width="100" height="98" alt="icône maison de icons8" />
                        </div>
                        <h4> Construction de maison personnalisée </h4>
                        <p> Construire la maison de rêve avec précision et soin. </p>
                    </div>
                    <div className={styles.carte} id="2">
                        <div className="icone">
                            <img src={iconeMarteau} width="100" height="98" alt="icône marteau de icons8" />
                        </div>
                        <h4> Rénovation </h4>
                        <p> Transformer les espaces avec les rénovations expertes. </p>
                    </div>
                    <div className={styles.carte} id="3">
                        <div className="icone">
                            <img src={iconePanneauSolaire} width="100" height="98" alt="icône panneau solaire de icons8" />
                        </div>
                        <h4> Solutions d'énergie solaire </h4>
                        <p>
                            Des solutions d'énergie solaire fiables conçues pour réduire
                            les coûts, améliorer l'efficacité et alimenter votre propriété de manière durable.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.projets}>
                <h1> Projets Récents </h1>
                <Carrousel />
            </section>

            <section className={styles.avisClient}>
                <h1>Avis clients</h1>
                <div className={styles.groupAvis}>
                    <div className={styles.avis} id='1'>
                    <img src={testiwoman} id='user1' alt="photo de profile de l'utilisateur" />
                        <hgroup>
                            <p> Meredith Zuka </p>
                        </hgroup>
                        <p>
                            Leur  souci du détail et leur engagement envers la qualité ressortent
                            vraiment. Je recommande vivement leurs services.
                        </p>
                    </div>

                    <div className={styles.avis} id=''>
                        <img src={testiman} id='user2' alt="photo de profile de l'utilisateur" />
                        <hgroup>
                            <p> John Arrey </p>
                        </hgroup>
                        <p>
                            Leur  souci du détail et leur engagement envers la qualité ressortent
                            vraiment. Je recommande vivement leurs services.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Accueil