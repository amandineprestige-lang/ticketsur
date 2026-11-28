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
              src="/hero-cards.jpg"
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
            Les recharges prépayées, en toute simplicité
          </h1>

          <div
            className="demo-form-instructions"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              width: '100%',
              margin: '0 auto',
              padding: '18px',
              borderRadius: '12px',
              backgroundColor: '#f5f8f7',
              textAlign: 'left',
            }}
          >
            <p
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                margin: 0,
                color: '#405d64',
                fontSize: '14px',
                lineHeight: '1.6',
              }}
            >
              <span style={{ color: '#176b72', fontWeight: '900' }}>—</span>
              <span>Des informations claires pour comprendre les tickets prépayés et adopter les bons réflexes de sécurité.</span>
            </p>

            <p
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                margin: 0,
                color: '#405d64',
                fontSize: '14px',
                lineHeight: '1.6',
              }}
            >
              <span style={{ color: '#176b72', fontWeight: '900' }}>—</span>
              <span>Recharge le Ticket est un service d'information indépendant. Aucune vérification de solde n'est effectuée.</span>
            </p>
          </div>
        </div>

        <section className="section recharge-section" id="recharges">
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
            Plateforme d'information pour vos recharges prépayées : TRANSCASH - PCS - NEOSURF
          </h2>
          <p style={{ textAlign: 'center', color: '#667780', marginBottom: '28px' }}>
            Cliquez sur le logo correspondant à votre type de ticket pour accéder au formulaire et obtenir les repères utiles.
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

          <p className="brand-disclosure">Les marques et logos appartiennent à leurs propriétaires respectifs. Recharge le Ticket n'est affilié à aucun émetteur.</p>
        </section>

        <InfoSection />
      </section>
    </main>
  )
}