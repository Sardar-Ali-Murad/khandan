import { companyInfo, navigationItems } from "../data/companyInfo";

export function Header() {
  return (
    <header className="site-header" id="top">
      <div className="topbar">
        <div className="container topbar__content">
          <a href={`mailto:${companyInfo.email}`} target="_blank" rel="noreferrer">
            {companyInfo.email}
          </a>
          <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}>{companyInfo.phone}</a>
        </div>
      </div>

      <nav className="nav" aria-label="Primary navigation">
        <div className="container nav__inner">
          <a className="brand" href="#top">
            <img
              src="/images/din-muhammad-group-logo.jpeg"
              alt={`${companyInfo.shortName} logo`}
            />
            <span>
              {companyInfo.shortName}
              <small>Of Companies - Pvt Ltd</small>
            </span>
          </a>

          <div className="nav__links">
            {navigationItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="button button--solid nav__cta"
            href={companyInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
