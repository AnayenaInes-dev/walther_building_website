import Menulateral from "../components/Menulateral";
import Barrenotif from "../components/Barrenotif"
import supprimer from "../assets/icons8-trash-100.png"
import stylo from "../assets/icons8-edit-pencil-100.png"
import styles from "../styles/Article.module.css"

function Article() {
    return (
        <>
            <Menulateral />
            <section className={styles.conteneur}>
                <Barrenotif />
                <br />

                <hgroup>
                    <h3> Articles/ Listes des articles </h3>
                </hgroup>

                {/* <div className={styles.filtres}>
                    <hgroup> <h4> Filtres de recherche </h4> </hgroup>
                    <div>
                        <input type="text" name="titre" id="titre" placeholder="Saisissez un titre" />
                        <input type="time" name="date" id="date" placeholder="Saisissez une date" />
                    </div>
                </div> */}
                <div className={styles.btns}>
                    <button className={styles.btnedit}> Nouvel article </button>
                    <button className={styles.btnmodif}> <img src={stylo} alt="icône de suppression" /> </button>
                    <button className={styles.btnsupp}> <img src={supprimer} alt="icône de suppression" /> </button>
                </div>

                <div className={styles.listeArticle}>
                    <table>
                        <caption> Articles du mois de <p></p> </caption>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </section>
        </>
    );
}

export default Article;