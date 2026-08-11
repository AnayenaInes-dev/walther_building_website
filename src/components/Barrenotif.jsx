import cloche from '../assets/icons8-notifications-100.png'
import './Barrenotif.css'

function Admin() {
    return (

        <header className='header'>
            <h1> Espace administrateur </h1>

            <div>
                <button>
                    {/* <img src={} alt="icône utilisateur" /> */}
                </button>
                <button>
                    <img src={cloche} alt="icône notification" />
                </button>
            </div>
        </header>

    )
}
export default Admin