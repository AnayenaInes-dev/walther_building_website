import localisation from '../assets/icons8-location-100-bordeaux.png'
import enveloppe from '../assets/icons8-letter-100-bordeaux.png'
import telephone from '../assets/icons8-phone-100-bordeaux.png'
import whatsapp from '../assets/icons8-whatsapp-100.png'
import linkedin from '../assets/icons8-linkedin-100.png'
import facebook from '../assets/icons8-facebook-f-100.png'
import x from '../assets/icons8-x-100.png'
import styles from '../styles/Contacts.module.css'

function Contacts() {
    return (
        <>
            <section className={styles.banniere}>
                <hgroup>
                    <h1>Contacts</h1>
                    <p>
                        Prêt à construire votre Avenir ? Contactez-nous dès aujourd'hui,
                        et créons ensemble quelque chose d'étonnant !
                    </p>
                </hgroup>
                <div className={styles.reseaux}>
                    <span> <img src={facebook} alt="icône facebook" /></span>
                    <span> <img src={linkedin} alt="icône linkedin" /></span>
                    <span> <img src={x} alt="icône x" /></span>
                    <span> <img src={whatsapp} alt="icône whatsapp" /></span>
                </div>
                <div className={styles.contacts}>
                    <div>
                        <p> <span> <img src={telephone} alt="icône telephone" /> </span> +237 699 89 68 85 </p>
                        <p> <span> <img src={enveloppe} alt="icône enveloppe" /> </span> waltherbuilding@gmail.com </p>
                        <p> <span> <img src={localisation} alt="icône localisation" /> </span> Simbock, Opposite Mario, Yaoundé</p>
                    </div>
                </div>
            </section>

            <section className={styles.formulaire}>
                <form action="">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" />

                    <label htmlFor="email">Email</label>
                    <input type="email" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>

                    <button> Envoyer </button>
                </form>
            </section>

            <section className={styles.carte}>

            </section>
        </>
    )
}
export default Contacts