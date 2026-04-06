import { useState, useEffect } from 'react'

function IconLogo() {
  return (
    <svg className="nav__mark" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0d9488" />
      <path
        d="M16 8c-2.5 0-4 1.8-4 4.2 0 1.4.6 2.6 1.4 3.4-.9.9-1.4 2.1-1.4 3.4 0 2.4 1.5 4.2 4 4.2s4-1.8 4-4.2c0-1.3-.5-2.5-1.4-3.4.8-.8 1.4-2 1.4-3.4C20 9.8 18.5 8 16 8z"
        fill="#fff"
      />
    </svg>
  )
}

function IconTooth() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3c-1.8 0-3 1.4-3.2 3.2-.1 1-.4 1.8-.8 2.4-.6.9-1 2-1 3.1 0 2.2 1.3 4.3 3 5.3.5.3 1.1.3 1.6 0 1.7-1 3-3.1 3-5.3 0-1.1-.4-2.2-1-3.1-.4-.6-.7-1.4-.8-2.4C15 4.4 13.8 3 12 3z" />
    </svg>
  )
}

function IconSparkle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  )
}

function IconImplant() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21V10M9 21h6M10 10V7a2 2 0 114 0v3" />
      <path d="M8 14h8v3a2 2 0 01-2 2h-4a2 2 0 01-2-2v-3z" />
    </svg>
  )
}

function IconPediatric() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20v-1a6 6 0 0112 0v1M9 14h.01M15 14h.01" />
    </svg>
  )
}

function IconBraces() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 6c0 3 1 6 1 9s-1 4-1 6M16 6c0 3-1 6-1 9s1 4 1 6M8 6h8M8 21h8" />
      <path d="M10 9h4M10 15h4" />
    </svg>
  )
}

function IconEmergency() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 8v5M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconMap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.3 9.3a16 16 0 006 6l1.7-1.7a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2.1z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 6h16v12H4z" strokeLinejoin="round" />
      <path d="M4 8l8 5 8-5" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="testimonial-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3 7h7l-5.5 4.2L18 21l-6-4.6L6 21l1.5-7.8L2 9h7l3-7z" />
        </svg>
      ))}
    </div>
  )
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    title: 'Preventive and family care',
    description:
      'Examinations, hygiene visits, and early intervention tailored to each member of your household. We prioritize clear explanations so you always know what we recommend and why.',
    icon: IconTooth,
    link: '#contact',
  },
  {
    title: 'Whitening and aesthetics',
    description:
      'Controlled in-office whitening and conservative cosmetic options that respect enamel health. We set realistic outcomes upfront and monitor comfort throughout treatment.',
    icon: IconSparkle,
    link: '#contact',
  },
  {
    title: 'Implants and replacement teeth',
    description:
      'Planning, placement, and restoration coordinated in one setting where possible. Our focus is stable function, natural appearance, and long-term maintenance you can sustain at home.',
    icon: IconImplant,
    link: '#contact',
  },
  {
    title: "Children's dentistry",
    description:
      'Calm pacing, age-appropriate language, and parents kept in the loop. We build habits early so visits feel predictable rather than stressful.',
    icon: IconPediatric,
    link: '#contact',
  },
  {
    title: 'Orthodontic alignment',
    description:
      'Fixed appliances and removable aligners for crowding and bite issues. Treatment plans emphasize airway-friendly mechanics and timelines you can plan around.',
    icon: IconBraces,
    link: '#contact',
  },
  {
    title: 'Urgent dental care',
    description:
      'Same-day attention for pain, fractures, and lost restorations during clinic hours. We stabilize the problem first, then schedule definitive care without unnecessary delay.',
    icon: IconEmergency,
    link: '#contact',
  },
]

const testimonials = [
  {
    quote:
      'I used to postpone cleanings for years. Here the hygienist walks me through each step, and I leave without the rushed feeling I had at other offices.',
    name: 'Elena Whitmore',
    role: 'Hygiene patient since 2021',
  },
  {
    quote:
      'They replaced a crown with attention to how my bite felt afterward—not just how it looked on the scan. That detail mattered more than I expected.',
    name: 'Marcus Chen',
    role: 'Restorative treatment',
  },
  {
    quote:
      'Our seven-year-old was anxious before the first visit. The team let her pause, showed her the tools, and now she asks when we are going back.',
    name: 'Priya Nair',
    role: 'Parent of two patients',
  },
]

const contactServices = [
  'New patient examination',
  'Hygiene and preventive care',
  'Whitening or cosmetic consult',
  'Implant or tooth replacement',
  'Orthodontic assessment',
  'Urgent or same-day concern',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a href="#home" className="sr-only">
        Skip to content
      </a>

      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container">
          <div className="nav__inner">
            <a href="#home" className="nav__brand" onClick={closeMenu}>
              <IconLogo />
              DentaCare
            </a>

            <nav className="nav__desktop" aria-label="Primary">
              <ul className="nav__links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="nav__cta">
              <a href="#contact" className="btn btn--primary">
                Book appointment
              </a>
            </div>

            <button
              type="button"
              className={`nav__toggle${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`nav__drawer${menuOpen ? ' is-open' : ''}`}
            aria-hidden={!menuOpen}
          >
            <div className="nav__drawer-inner">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn btn--primary" onClick={closeMenu}>
                Book appointment
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero__grid">
              <div>
                <p className="hero__kicker">Accepting new patients</p>
                <h1>Dental care that stays calm, clear, and consistent</h1>
                <p className="hero__copy">
                  From routine visits to more involved treatment, we explain options in plain language, run on time, and
                  keep the same clinical standards we would expect for our own families. No pressure—just careful work and
                  follow-through.
                </p>
                <div className="hero__actions">
                  <a href="#contact" className="btn btn--primary">
                    Book appointment
                  </a>
                  <a href="#services" className="btn btn--secondary">
                    View services
                  </a>
                </div>
                <div className="hero__trust">
                  <div>
                    <div className="hero__stat-num">4,800+</div>
                    <div className="hero__stat-label">Active charts</div>
                  </div>
                  <div>
                    <div className="hero__stat-num">16 yrs</div>
                    <div className="hero__stat-label">Same leadership team</div>
                  </div>
                  <div>
                    <div className="hero__stat-num">4.9</div>
                    <div className="hero__stat-label">Post-visit average</div>
                  </div>
                </div>
              </div>

              <div className="preview-card" aria-label="Sample scheduling overview">
                <div className="preview-card__head">
                  <span className="preview-card__title">Front desk — today</span>
                  <div className="preview-card__dots" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="preview-card__body">
                  <div className="preview-card__row">
                    <div>
                      <div className="preview-card__label">Next hygiene opening</div>
                      <div className="preview-card__value">Today · Dr. Morgan</div>
                      <div className="preview-card__meta">Adult prophylaxis · Room 2</div>
                      <div className="preview-card__slots">
                        <span className="preview-card__slot">11:20</span>
                        <span className="preview-card__slot">2:40</span>
                        <span className="preview-card__slot">4:10</span>
                      </div>
                    </div>
                  </div>
                  <div className="preview-card__row">
                    <div>
                      <div className="preview-card__label">Tomorrow</div>
                      <div className="preview-card__value">Consult · implant planning</div>
                      <div className="preview-card__meta">Imaging reviewed · consent ready</div>
                    </div>
                  </div>
                  <div className="preview-card__footer">
                    <div className="preview-card__metric">
                      <div className="preview-card__metric-val">18</div>
                      <div className="preview-card__metric-key">Open slots</div>
                    </div>
                    <div className="preview-card__metric">
                      <div className="preview-card__metric-val">6</div>
                      <div className="preview-card__metric-key">Operators</div>
                    </div>
                    <div className="preview-card__metric">
                      <div className="preview-card__metric-val">97%</div>
                      <div className="preview-card__metric-key">On schedule</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head center">
              <span className="section-label">Clinical services</span>
              <h2 className="h2">What we do in-house</h2>
              <p className="section-lead">
                Six focused areas cover most needs without sending you across town unless a specialist truly serves you
                better.
              </p>
            </div>
            <div className="services__grid">
              {services.map((s) => {
                const Ico = s.icon
                return (
                  <article key={s.title} className="service-card">
                    <div className="service-card__icon">
                      <Ico />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <a href={s.link} className="service-card__link">
                      Request this visit
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <div className="about__grid">
              <div>
                <span className="section-label">About the practice</span>
                <h2 className="h2">Built around continuity, not volume</h2>
                <div className="about__copy">
                  <p>
                    DentaCare began when our lead clinicians wanted a setting where appointments were long enough to
                    finish conversations, not just procedures. We keep charts, imaging, and lab communication under one
                    roof so you are not chasing updates between providers.
                  </p>
                  <p>
                    Our instruments and materials are chosen for durability and evidence-backed outcomes—not novelty.
                    If something does not need treatment, we say so. When it does, you get a written plan, a realistic
                    timeline, and a clear picture of what insurance may cover versus what is out of pocket.
                  </p>
                </div>
                <div className="about__cta">
                  <a href="#contact" className="btn btn--ghost">
                    Plan a first visit
                  </a>
                </div>
              </div>
              <div className="stats-grid" aria-label="Practice highlights">
                <div className="stat-card">
                  <div className="stat-card__value">4,800+</div>
                  <div className="stat-card__label">Patients of record</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card__value">16</div>
                  <div className="stat-card__label">Years at this location</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card__value">Same day</div>
                  <div className="stat-card__label">Urgent slots when available</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card__value">Mon–Sat</div>
                  <div className="stat-card__label">Front desk staffed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section testimonials">
          <div className="container">
            <div className="section-head center">
              <span className="section-label">Patient feedback</span>
              <h2 className="h2">Word of mouth we earn in the chair</h2>
              <p className="section-lead">Recent comments left after visits—unedited apart from length.</p>
            </div>
            <div className="testimonials__grid">
              {testimonials.map((t) => (
                <article key={t.name} className="testimonial-card">
                  <Stars />
                  <blockquote>“{t.quote}”</blockquote>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact__grid">
              <div className="contact__intro">
                <span className="section-label">Contact</span>
                <h2 className="h2">Visit or write to us</h2>
                <p className="section-lead">
                  Tell us what you need and a realistic window to reach you. We confirm by phone or email within one
                  business day.
                </p>
                <div className="contact-list">
                  <div className="contact-item">
                    <div className="contact-item__icon">
                      <IconMap />
                    </div>
                    <div>
                      <div className="contact-item__label">Clinic</div>
                      <div className="contact-item__value">
                        123 Saddar Road, Hyderabad, Sindh, Pakistan
                      </div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item__icon">
                      <IconPhone />
                    </div>
                    <div>
                      <div className="contact-item__label">Phone</div>
                      <div className="contact-item__value">
                        <a href="tel:+922212345678">+92 221 234 5678</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item__icon">
                      <IconMail />
                    </div>
                    <div>
                      <div className="contact-item__label">Email</div>
                      <div className="contact-item__value">
                        <a href="mailto:info@dentacare.pk">info@dentacare.pk</a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item__icon">
                      <IconClock />
                    </div>
                    <div>
                      <div className="contact-item__label">Hours</div>
                      <div className="contact-item__value">Monday to Saturday 9:00 AM to 8:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrap">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="full-name">Full name</label>
                    <input id="full-name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Reason for visit</label>
                    <select id="service" name="service" defaultValue="" required>
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {contactServices.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Preferred days, insurance carrier, or symptoms we should know about."
                    />
                  </div>
                  <button type="submit" className="btn btn--primary btn--block">
                    Send request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__brand">DentaCare</div>
              <p className="footer__about">
                Full-service dental care with conservative treatment plans, transparent fees, and staff who remember your
                name.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul className="footer__links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__contact">
              <h4>Reach us</h4>
              <p>123 Saddar Road, Hyderabad, Sindh, Pakistan</p>
              <p>
                <a href="tel:+922212345678">+92 221 234 5678</a>
              </p>
              <p>
                <a href="mailto:info@dentacare.pk">info@dentacare.pk</a>
              </p>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© 2026 DentaCare Clinic. All rights reserved.</p>
            <p>Designed by Zelviq</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
