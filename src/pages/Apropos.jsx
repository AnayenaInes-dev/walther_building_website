import employe1 from '../assets/employe_1.png'
import employe2 from '../assets/employe_2.png'
import employe3 from '../assets/employe_3.jpg'
import employe4 from '../assets/employe_4.png'
import employe5 from '../assets/employe_5.png'
import employe6 from '../assets/testi-woman.jpg'
import employe7 from '../assets/employe_6.jpeg'
import employe8 from '../assets/employe_7.jpeg'
import photo from '../assets/chefdentreprise.png'
import '../styles/Apropos.css'

function Apropos() {
    return(
        <>
            <section className="info-entreprise">
                <h1> Qui sommes nous </h1>
                <div>
                    <p>
                        Sint irure esse cillum aute eiusmod ullamco aute qui sint fugiat. 
                        Aliqua fugiat eiusmod enim et excepteur. 
                        Deserunt est anim laboris nisi cupidatat nostrud in in velit deserunt. 
                        Nisi reprehenderit fugiat enim proident id nisi adipisicing in elit eu 
                        excepteur adipisicing sunt tempor. Officia laborum officia exercitation 
                        labore deserunt excepteur sit nostrud sint do esse. 
                        Ex sint nulla consectetur ullamco est ullamco reprehenderit sint. 
                        Anim proident elit cupidatat laboris ad tempor.
                    </p>
                    <p>
                        Sint irure esse cillum aute eiusmod ullamco aute qui sint fugiat. 
                        Aliqua fugiat eiusmod enim et excepteur. 
                        Deserunt est anim laboris nisi cupidatat nostrud in in velit deserunt. 
                        Nisi reprehenderit fugiat enim proident id nisi adipisicing in elit eu 
                        excepteur adipisicing sunt tempor. Officia laborum officia exercitation 
                        labore deserunt excepteur sit nostrud sint do esse. 
                        Ex sint nulla consectetur ullamco est ullamco reprehenderit sint. 
                        Anim proident elit cupidatat laboris ad tempor.
                    </p>
                </div>
            </section>

            <section className="fondateur">
                <h1> Mot du directeur de l'entreprise </h1>
                <div>
                    <p>
                        Sint irure esse cillum aute eiusmod ullamco aute qui sint fugiat. 
                        Aliqua fugiat eiusmod enim et excepteur. 
                        Deserunt est anim laboris nisi cupidatat nostrud in in velit deserunt. 
                        Nisi reprehenderit fugiat enim proident id nisi adipisicing in elit eu 
                        excepteur adipisicing sunt tempor. Officia laborum officia exercitation 
                        labore deserunt excepteur sit nostrud sint do esse. 
                        Ex sint nulla consectetur ullamco est ullamco reprehenderit sint. 
                        Anim proident elit cupidatat laboris ad tempor.
                    </p>
                    <img src={photo} alt="photo du directeur" />
                </div>
            </section>

            <section className="equipe">
                <h1> Notre personnel </h1>
                <div className="grille">

                    <div>
                        <img src={employe1} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                    <div>
                        <img src={employe2} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                    <div>
                        <img src={employe3} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                    <div>
                        <img src={employe4} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                    <div>
                        <img src={employe5} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                    <div>
                        <img src={employe6} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                    <div>
                        <img src={employe7} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                    <div>
                        <img src={employe8} width="140" height="140" alt="photo d'un membre de l'équipe" />
                        <p> Nom & prénom </p>
                        <p> Poste occupé </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Apropos