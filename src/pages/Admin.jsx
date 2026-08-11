import Menulateral from '../components/Menulateral.jsx'
import Barrenotif from '../components/Barrenotif.jsx'
import styles from '../styles/Admin.module.css'

function Admin() {

    const donnees = [
        { id: 1, nom: 'Projet1', avancement: '70%', etat: 'En cours' },
        { id: 2, nom: 'Projet2', avancement: '50%', etat: 'En cours' },
        { id: 3, nom: 'Projet3', avancement: '48%', etat: 'En cours' }
    ];

    return (
        <>
            <Menulateral />

            <section className={styles.conteneur}>
                <Barrenotif />
                <br />
                <hgroup>
                    <h3> Tableau de bord</h3>
                </hgroup>
                <div className={styles.recap}>
                    <div className={styles.cartes}>
                        <div>
                            <p>23</p>
                            <p>Total projet</p>
                        </div>
                        <div>
                            <p>20</p>
                            <p>Projet terminés</p>
                        </div>
                        <div>
                            <p>3</p>
                            <p>Projet en cours</p>
                        </div>
                    </div>
                    {/* <div > */}
                    <table className={styles.tableau}>
                        <caption> Etat d'avancement des projets </caption>
                        {donnees.map((element) => (
                            <tr key={element.id}>
                                <td> <p> {element.avancement}  </p> </td>
                                <td>
                                    <p> {element.nom} </p>
                                    <p> {element.etat} </p>
                                </td>
                            </tr>
                        ))}

                    </table>
                    {/* </div> */}
                </div>
                <hgroup>
                    <h3> Statistiques </h3>
                </hgroup>
                <div className={styles.graphiques}>
                    <div className={styles.anneau}>
                        
                    </div>
                    <div className={styles.histogramme}>
                        
                    </div>
                </div>
                {/* <div className={styles.notifs}>

                </div> */}
            </section>
        </>
    )
}
export default Admin