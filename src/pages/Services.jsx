import Entete from '../components/Entete'
import Footer from '../components/Footer'
import devis from '../assets/devis-et-plan.png'
import architecture from '../assets/conception-architecturale.png'
import peinture from '../assets/peinture.jpg'
import plomberie from '../assets/installation-sanitaire.jpeg'
import menuserie from '../assets/bois.png'
import panneau from '../assets/panneau-solaire.png'
import sable from '../assets/granulats.jpg'
import terrain from '../assets/terrain.png'
import styles from '../styles/Services.module.css'

function Services() {
     return(
        <>
            <section className={styles.banniere}>
                <h1> Services </h1>
                <p>
                    Chez Walther Building, nous offrons une grande variété de Services
                    adaptés à vos besoins. De la conception initiale à la construction finale, 
                    nous garantissons tous la qualité, la sécurité et la satisfaction étape du chemin.
                </p>
            </section>

            <section className={styles.grille}>
                <div className={styles.service} id="1">
                    <div className={styles.info}>
                        <h3> Estimations, planification et exécution</h3>
                        <p>
                            Un service complet de gestion de projet comblant
                            le fossé entre un plan et une structure finie.
                        </p>
                        <button> En savoir plus </button>
                    </div>
                    <div className={styles.image}>
                        <img src={devis}  alt="photo d'un bureau" />
                    </div>
                </div>
                <div className={styles.service} id="2">
                    <div className={styles.image}>
                        <img src={architecture}  alt="photo d'un bureau" />
                    </div>
                    <div className={styles.info}>
                         <h3> Conception architecturale </h3>
                        <p>
                            Nous transformons votre vision en réalité construtible
                            créatif, précis et axé sur l'avenir.
                        </p>
                        <button> En savoir plus </button>
                    </div>
                </div>
                <div className={styles.service} id="3">
                    <div className={styles.info}>
                        <h3> Peinture et décoration </h3>
                        <p>
                            La touche finale qui apporte à votre bâtiment sa 
                            personnalité esthétique et sa protection.
                        </p>
                        <button> En savoir plus </button>
                    </div>
                    <div className={styles.image}>
                        <img src={peinture}  alt="photo d'un bureau" />
                    </div>                    
                </div>
                <div className={styles.service} id="4">
                    <div className={styles.image}>
                        <img src={plomberie}  alt="photo d'un bureau" />
                    </div>
                    <div className={styles.info}>
                        <h3> Carrelage et plomberie sanitaire </h3>
                        <p>
                            Travaux de finition experts, y compris pour les revêtements 
                            et les installations d'eau complètes.
                        </p>
                        <button> En savoir plus </button>
                    </div>
                </div>
                <div className={styles.service} id="5">
                    <div className={styles.info}>
                        <h3> Menuserie bois et aluminium </h3>
                        <p>
                            Des réponse rapides et des solutions durables.
                            Nous restaurons la solidité et la sécurité, 
                            en construisant pour résister au passage du temps.
                        </p>
                        <button> En savoir plus </button>
                    </div>
                    <div className={styles.image}>
                        <img src={menuserie}  alt="photo d'un bureau" />
                    </div>
                </div>
                <div className={styles.service} id="6">
                    <div className={styles.image}>
                        <img src={panneau}  alt="photo d'un bureau" />
                    </div>
                    <div className={styles.info}>
                        <h3> Vente de panneau solaire </h3>
                        <p>
                            Alimenter votre maison avec de l'énergie solaire.
                            Des panneaux solaires fiables, efficaces et 
                            respectueux de l'environnement pour un avenir meilleur 
                            et des coûts réduits.
                        </p>
                        <button> En savoir plus </button>
                    </div>
                </div>
                <div className={styles.service} id="7">
                    <div className={styles.info}>
                        <h3> Approvisionnement  en sable </h3>
                        <p>
                            Du sable de qualité, livraison fiable, propore
                            durable et prêt pour la construction. Livré à
                            temps à chaque fois.  
                        </p>
                        <button> En savoir plus </button>
                    </div>
                    <div className={styles.image}>
                        <img src={sable}  alt="photo d'un bureau" />
                    </div>
                </div>
                <div className={styles.service} id="8">
                    <div className={styles.image}>
                        <img src={terrain}  alt="photo d'un bureau" />
                    </div>
                    <div className={styles.info}>
                        <h3> Vente de terrain </h3>
                        <p>
                            Emplacement principaux, tractions sécurisées, tracés
                            vérifiés auxquels vous pouvez faire confiance. Construisez
                            votre avenir en toute confiance.
                        </p>
                        <button> En savoir plus </button>
                    </div>
                </div>
            </section>

            <section className={styles.appelAction}>
                <div>
                    <h4> Vous avez un projet que vous souhaitez démarrer ? </h4>
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
export default Services