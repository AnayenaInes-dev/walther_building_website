// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
// import Accuiel from 'App'
import Apropos from './pages/Apropos'
// import Apropos from './pages/Apropos'
// import Apropos from './pages/Apropos'
import Logo from './assets/logo-removebg.png'
import iconeMaison from './assets/icons8-home-100.png'
import iconeMarteau from './assets/icons8-hammer-100.png'
import iconePanneauSolaire from './assets/icons8-panneau-solaire.png'
import testiman from './assets/testi-man.jpg'
import testiwoman from './assets/testi-woman.jpg'
import Entete from './components/Entete'
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
    <>
      <Entete />

      <Routes>
        {/* <Route path="/" element={Accuiel} /> */}
        <Route path="./pages/Apropos" element={Apropos} />
        {/* <Route path="/services" element={} /> */}
        {/* <Route path="/projets" element={} /> */}
        {/* <Route path="/blog" element={} /> */}
        {/* <Route path="/contacts" element={} /> */}
        {/* <Route path="/galerie" element={} /> */}
      </Routes>
      
      <section className="principale">
            <div>
            <h1> Construire votre avenir avec qualité & expertise </h1>
            <p>
                Nous livrons des solutions de construction résidentielle
                et commerciale exceptionnelles pour donner vie à votre  vision.
            </p>
            <button> Demander un dévis </button>
            </div>
        </section>

        <section className="apropos">
            <h1> L'entreprise </h1>
            <div className="logo"></div> <br/>
            <div className="texte">
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
        
        <section className="services">
            <h1>Services</h1>
            <div className="cartes">
            <div className='carte' id="1">
                <div className="icone">
                <img src={iconeMaison} width="100" height="98" alt="icône maison de icons8" />
                </div>
                <h4> Construction de maison personnalisée </h4>
                <p> Construire la maison de rêve avec précision et soin. </p>
            </div>
            <div className='carte' id="2">
                <div className="icone">
                <img src={iconeMarteau} width="100" height="98" alt="icône marteau de icons8" />
                </div>
                <h4> Rénovation </h4>
                <p> Transformer les espaces avec les rénovations expertes. </p>
            </div>
            <div className='carte' id="3">
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

        <section className="projets">
            <h1> Projets Récents </h1>
            <div className="carrousel">
            <div className="galerie">
                <img id='1' src="" alt="" />
                <img id='2' src="" alt="" />
                <img id='3' src="" alt="" />
                <img id='4' src="" alt="" />
                <img id='5' src="" alt="" />
                <img id='6' src="" alt="" />
            </div>
            <br />
            <div className="btns">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            </div>
        </section>

        <section className="avisClient">
            <h1>Avis clients</h1>
            <div className="avis">
            <div>
                <hgroup>
                <img src={testiwoman} alt="photo de profile de l'utilisateur" />
                <p className="username"> Meredith Zuka </p> 
                </hgroup>
                <p>
                Leur  souci du détail et leur engagement envers la qualité ressortent 
                vraiment. Je recommande vivement leurs services.
                </p>
            </div>
            <div>
                <hgroup>
                <img src={testiman} alt="photo de profile de l'utilisateur" />
                <p className="username"> John Arrey </p>  
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

export default App
