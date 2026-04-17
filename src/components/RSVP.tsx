import React, { useState } from 'react'
import { KazakhOrnament, HorizontalBorder } from './Ornaments'
import styles from './RSVP.module.css'

const BOT_TOKEN = '8680678876:AAEjOlPIowFVMqj4BgVauUm15J6_maDVplA'
const CHAT_ID = '-4931537588'

interface FormState {
  name: string
  attending: string
  message: string
}

const RSVP: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    attending: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.attending) return

    setStatus('loading')

    const attendingText =
      form.attending === 'yes'
        ? '✅ Иә, келемін'
        : form.attending === 'with_spouse'
          ? '💑 Жұбайыммен келемін'
          : '❌ Жоқ, келе алмаймын'

    const text = [
      `🎊 *Жаңа RSVP жауабы*`,
      `👤 *Аты-жөні:* ${form.name}`,
      `${attendingText}`,
      form.message ? `💬 *Тілек:* ${form.message}` : '',
      ``,
      `📅 *Той:* 25 шілде 2026`,
      `🏛️ *Орны:* Абиба мейрамханасы`,
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        setForm({ name: '', attending: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.rsvp} id="rsvp">
      <div className={`${styles.bgLeft} ornament-bg`} />

      <div className={styles.container}>
        <div className={styles.decorTop}>
          <KazakhOrnament size={100} opacity={0.3} />
        </div>

        <p className={styles.label}>ЖАУАП БЕРІҢІЗ</p>
        <h2 className={styles.title}>Тойға келуіңізді растаңыз</h2>
        <p className={styles.subtitle}>
          Тойымызға қатысасыз ба, жоқ па — бізге алдын ала хабарласыңыз
        </p>

        <HorizontalBorder width={300} />

        {status === 'success' ? (
          <div className={styles.successBlock}>
            <KazakhOrnament size={80} opacity={0.6} />
            <h3 className={styles.successTitle}>Рахмет!</h3>
            <p className={styles.successText}>
              Жауабыңыз қабылданды. Сізді күтеміз! 🎊
            </p>
            <button className="btn-outline" onClick={() => setStatus('idle')}>
              Қайта толтыру
            </button>
          </div>
        ) : (
          <div className={styles.form}>
            {/* Attending */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Тойға келуіңізді растауыңызды сұраймыз *</label>
              <div className={styles.radioGroup}>
                {[
                  { value: 'yes', label: 'Иә, келемін' },
                  { value: 'with_spouse', label: 'Жұбайыммен келемін' },
                  { value: 'no', label: 'Жоқ, келе алмаймын' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`${styles.radioBtn} ${form.attending === opt.value ? styles.radioBtnActive : ''}`}
                    onClick={() => setForm(prev => ({ ...prev, attending: opt.value }))}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Аты-жөніңізді сұраймыз *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={
                  form.attending === 'with_spouse'
                    ? 'Сіз және жұбайыңыздың аты-жөні'
                    : 'Аты-жөніңізді енгізіңіз'
                }
                className="form-input"
                required
              />
              {form.attending === 'with_spouse' && (
                <p className={styles.fieldHint}>
                  Жұбайыңызбен келетін болсаңыз, екеуіңіздің есімдеріңізді бірге жазуды өтінеміз
                </p>
              )}
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Тілек (міндетті емес)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Жас жұбайларға тілегіңізді жазыңыз..."
                className={`form-input ${styles.textarea}`}
                rows={3}
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorText}>Қате болды. Қайталап көріңіз.</p>
            )}

            <button
              className={`btn-gold ${styles.submitBtn}`}
              onClick={handleSubmit}
              disabled={status === 'loading' || !form.name || !form.attending}
            >
              {status === 'loading' ? 'Жіберілуде...' : 'Жауап беру'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default RSVP
