import vignette1 from '../assets/yellow-repair-tools-wooden-background.jpg'
import vignette2 from '../assets/renovation-image.jpg'
import vignette3 from '../assets/collaboration.jpeg'
import vignette4 from '../assets/plan-de-construction-maison.jpg'
import vignette5 from '../assets/10127.jpg'
import '../styles/Blog.css'

function Blog() {
     return(
        <>
             <section className="banniere">
                <h1> Blog </h1>
                <p>
                    Conseils en matière de construction. Restez au courant 
                    actualités de l'industrie, des conseils utiles et des
                    conseils d'experts de Walther Building.
                </p>
            </section>

            <section className="grille">
                <h1> Articles récents </h1>
                <div className="cartes">
                    <div className="carte">
                        <div className="image">
                            <img src={vignette1} alt="outils" />
                        </div>
                        <h4> Conseils essentiels pour une rénovation familiale réussie</h4>
                        <p>
                            Qui incididunt quis laborum ipsum non est sunt aute laborum commodo magna mollit.
                            Elit pariatur exercitation exercitation minim velit ea commodo eiusmod cupidatat.
                            Commodo pariatur aliqua velit quis...
                        </p>
                        <button> Lire plus </button>
                    </div>
                    <div className="carte">
                        <div className="image">
                            <img src={vignette2} alt="travaux de rénovation" />
                        </div>
                        <h4> Guide étape par étape pour construire une maison au Cameroun </h4>
                        <p>
                            Qui incididunt quis laborum ipsum non est sunt aute laborum commodo magna mollit.
                            Elit pariatur exercitation exercitation minim velit ea commodo eiusmod cupidatat.
                            Commodo pariatur aliqua velit quis...
                        </p>
                        <button> Lire plus </button>
                    </div>
                    <div className="carte">
                        <div className="image">
                            <img src={vignette3} alt="collaboration" />
                        </div>
                        <h4> Comment choisir la bonne entreprise de construction </h4>
                        <p>
                            Qui incididunt quis laborum ipsum non est sunt aute laborum commodo magna mollit.
                            Elit pariatur exercitation exercitation minim velit ea commodo eiusmod cupidatat.
                            Commodo pariatur aliqua velit quis...
                        </p>
                        <button> Lire plus </button>
                    </div>
                    <div className="carte">
                        <div className="image">
                            <img src={vignette4} alt="plan" />
                        </div>
                        <h4> 10 erreurs courantes à éviter lors de la construction d'une maison </h4>
                        <p>
                            Qui incididunt quis laborum ipsum non est sunt aute laborum commodo magna mollit.
                            Elit pariatur exercitation exercitation minim velit ea commodo eiusmod cupidatat.
                            Commodo pariatur aliqua velit quis...
                        </p>
                        <button> Lire plus </button>
                    </div>
                    <div className="carte">
                        <div className="image">
                            <img src={vignette5} alt="travaux" />
                        </div>
                        <h4> Combien coûte la construction d'une maison au Cameroun </h4>
                        <p>
                            Qui incididunt quis laborum ipsum non est sunt aute laborum commodo magna mollit.
                            Elit pariatur exercitation exercitation minim velit ea commodo eiusmod cupidatat.
                            Commodo pariatur aliqua velit quis...
                        </p>
                        <button> Lire plus </button>
                    </div>
                </div>
                <button> Voir plus </button>
            </section>
        </>
    )
}
export default Blog