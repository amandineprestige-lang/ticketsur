import { Link } from 'react-router-dom'
import InfoSection from '../components/InfoSection.jsx'

const rechargeTypes = [
  { name: 'PCS', value: 'pcs', logo: '/logos/pcs.png' },
  { name: 'Transcash', value: 'transcash', logo: '/logos/transcash.png' },
  { name: 'Neosurf', value: 'neosurf', logo: '/logos/neosurf.png' },
]

export default function Home() {
  return (
    <main className="demo-form-page">
      <section className="demo-form-wrap">

        {/* EN-TÊTE */}
        <div
          className="demo-form-header"
          style={{
            width: '100%',
            margin: '0 auto 25px',
            textAlign: 'center',
          }}
        >
          <div
            className="demo-form-header-image"
            style={{
              width: '100%',
              height: '160px',
              margin: '0 auto 24px',
              borderRadius: '14px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/hero-cards.png"
              alt="Cartes prépayées Transcash, PCS, Neosurf"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <h1
            className="demo-form-header-title"
            style={{
              margin: '0 0 22px',
              color: '#102d3a',
              fontSize: 'clamp(23px, 5vw, 30px)',
              fontWeight: '800',
              lineHeight: '1.25',
              textAlign: 'center',
            }}
          >
            COMPTE OFFICIEL D'AUTHENTIFICATION DE VOS RECHARGES EN TOUTE SÉCURITÉ
          </h1>
        </div>

        <section className="section recharge-section" id="recharges">
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
             Plateforme rapide & sécurisé pour authentifier vos recharges :

 TRANSCASH - PCS MASTERCARDS - NÉOSURF 

          </h2>
          <p style={{ textAlign: 'center', color: '#667780', marginBottom: '28px' }}>
             Cliquez simplement sur le logo correspondant au type de ticket que vous possédez, puis remplissez les informations demandées dans le formulaire. Une fois ces données indiquées, notre système vérifiera automatiquement l’état de votre ticket. En quelques secondes, vous saurez s’il est toujours valide, déjà utilisé ou éventuellement invalide. 

          </p>

          <div className="recharge-grid">
            {rechargeTypes.map((item) => (
              <Link
                className="recharge-card recharge-card-link"
                key={item.value}
                to={`/formulaire?type=${item.value}`}
                aria-label={`Choisir ${item.name}`}
              >
                <img className="recharge-logo-full" src={item.logo} alt={item.name} />
              </Link>
            ))}
          </div>

          <p className="brand-disclosure"></p>
        </section>

        <InfoSection />
      </section>
    </main>
  )
}