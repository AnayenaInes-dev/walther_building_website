import localisation from '../assets/icons8-location-100-bordeaux.png'
import enveloppe from '../assets/icons8-letter-100-bordeaux.png'
import telephone from '../assets/icons8-phone-100-bordeaux.png'
import whatsapp from '../assets/icons8-whatsapp-100.png'
import linkedin from '../assets/icons8-linkedin-100.png'
import facebook from '../assets/icons8-facebook-f-100.png'
import x from '../assets/icons8-x-100.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from '../styles/Contacts.module.css'

function Contacts() {
    const position = [3.8209702, 11.4731585]
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
                    <img src={facebook} alt="icône facebook" />
                    <img src={linkedin} alt="icône linkedin" />
                    <img src={x} alt="icône x" />
                    <img src={whatsapp} alt="icône whatsapp" />
                </div>
                <div className={styles.contacts}>
                    <div>
                        <img src={telephone} width={22} height={22} alt="icône telephone" />
                        <p> +237 699 89 68 85 </p>
                    </div>
                    <div>
                        <img src={enveloppe} width={22} height={22} alt="icône enveloppe" /> 
                        <p> waltherbuilding@gmail.com </p>
                    </div>
                    <div>
                        <img src={localisation} width={21} height={21} alt="icône localisation" />
                        <p> Simbock, Yaoundé </p>
                    </div>
                    
                </div>
            </section>

            <section className={styles.formulaire}>
                <h1> Envoyer nous un message </h1>
                <form action="">
                    <label htmlFor="nom">Nom</label> <br />
                    <input type="text" id='nom' required /> <br />

                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id='email' required /> <br />

                    <label htmlFor="message">Message</label> <br />
                    <textarea name="message" id="message" required ></textarea> <br />

                    <button> Envoyer </button>
                </form>
            </section>

            <section className={styles.carte}>
                <div>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='<a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup> Simbock, Yaoundé </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </section>
        </>
    )
}
export default Contacts