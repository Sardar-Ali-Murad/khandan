import { companyInfo, navigationItems } from "../data/companyInfo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div>
          <p className="footer__title">{companyInfo.name}</p>
          <p className="footer__text">
            Real estate, construction, development, and project marketing
            support for clients in Multan, South Punjab, and Islamabad.
          </p>
        </div>

        <div className="footer__links">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
