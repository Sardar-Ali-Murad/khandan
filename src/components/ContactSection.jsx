import { companyInfo } from "../data/companyInfo";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  const phoneLink = companyInfo.phone.replace(/\s+/g, "");
  const mailSubject = encodeURIComponent("Property inquiry from website");

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Speak with our team about your next property step."
          description="Whether you are buying, selling, planning construction, or preparing a development project, our team is ready to guide you with direct and professional communication."
        />

        <div className="contact-layout">
          <article className="contact-copy card-surface">
            <h3>Direct business details</h3>
            <div className="contact-points">
              <a
                href={`mailto:${companyInfo.email}?subject=${mailSubject}`}
                target="_blank"
                rel="noreferrer"
              >
                {companyInfo.email}
              </a>
              <a href={`tel:${phoneLink}`}>{companyInfo.phone}</a>
              <a href={companyInfo.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp chat
              </a>
              <a href={companyInfo.facebookUrl} target="_blank" rel="noreferrer">
                Facebook group
              </a>
              <p>{companyInfo.address}</p>
            </div>
          </article>

          <form
            className="contact-card"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(
                `mailto:${companyInfo.email}?subject=${mailSubject}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Phone
              <input type="tel" placeholder="+92..." />
            </label>
            <label>
              Service
              <select defaultValue="Buy property">
                <option>Buy property</option>
                <option>Sell property</option>
                <option>Construction</option>
                <option>Project marketing</option>
                <option>Investment consultation</option>
              </select>
            </label>
            <label>
              Requirement
              <textarea
                rows="5"
                placeholder="Tell us about the location, budget, or project need."
              />
            </label>
            <button className="button button--solid button--full" type="submit">
              Email your inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
