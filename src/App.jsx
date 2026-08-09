// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Accueil from "./pages/Accueil.jsx"
import Apropos from './pages/Apropos.jsx'
import Services from './pages/Services.jsx'
import Projets from './pages/Projets.jsx'
import Blog from './pages/Blog.jsx'
import Contacts from './pages/Contacts.jsx'
import Galerie from './pages/Galerie.jsx'
import DetailArticle from './pages/DetailArticle.jsx'
import DetailService from './pages/DetailService.jsx'
import DetailProjet from './pages/DetailProjet.jsx'
import Entete from './components/Entete'
import Footer from './components/Footer.jsx'
import 'leaflet/dist/leaflet.css';
import './App.css'


function App() {

    return (
        <>
            <Entete />
            
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/galerie" element={<Galerie />} />
                <Route path="/article/" element={<DetailArticle />} />
                <Route path="/projet/" element={<DetailProjet />} />
                <Route path="/service/" element={<DetailService />} />
            </Routes>
            
            <Footer />
        </>
    )
}

export default App
