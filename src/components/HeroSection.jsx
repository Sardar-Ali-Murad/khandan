import { companyInfo, heroStats } from "../data/companyInfo";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__backdrop hero__backdrop--one" />
      <div className="hero__backdrop hero__backdrop--two" />

      <div className="container hero__content">
        <div className="hero__copy">
          <p className="eyebrow">Real estate, construction, and project marketing</p>
          <h1>Property guidance built for serious buyers, sellers, and developers.</h1>
          <p className="hero__lead">
            {companyInfo.name} supports clients with real estate consultation,
            construction direction, development planning, and project marketing
            designed for the needs of Multan, South Punjab, and Islamabad.
          </p>

          <div className="hero__actions">
            <a className="button button--solid" href="#contact">
              Book a consultation
            </a>
            <a className="button button--ghost" href="#services">
              Explore services
            </a>
          </div>

          <div className="hero__stats">
            {heroStats.map((item) => (
              <article key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero__panel">
          <p className="eyebrow">Built for trust</p>
          <h2>Trusted guidance for property decisions that matter.</h2>
          <p>
            We believe every property matter deserves clear advice, responsive
            communication, and practical direction from the first discussion to
            the final decision.
          </p>
          <div className="hero__contact-strip">
            <a href={companyInfo.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={companyInfo.facebookUrl} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
