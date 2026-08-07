import Entete from '../components/Entete'
import Footer from '../components/Footer'
// import '../styles/Contacts.css'

function Contacts() {
     return(
        <>
            <section className="banniere">
                <hgroup>
                    <h1>Contacts</h1>
                    <p>
                        Prêt à construire votre Avenir ? Contactez-nous dès aujourd'hui, 
                        et créons ensemble quelque chose d'étonnant !
                    </p>
                </hgroup>
                <div className="resaux">

                </div>
                <div className="contacts">
                    <ul>
                        <li>
                            <p>+237 699  89 68 85</p>
                        </li>
                        <li>
                            <p>waltherbuilding@gmail.com</p>
                        </li>
                        <li>
                            <p>Simbock, Opposite Mario, Yaoundé</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="formulaire">
                <form action=""></form>
            </section>

            <section className="carte">

            </section>
        </>
    )
}
export default Contacts