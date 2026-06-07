import { services } from "../data/companyInfo";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Focused support across real estate and construction."
          description="Our services are designed for clients seeking dependable property consultation, construction support, project marketing, and development guidance in Multan, South Punjab, and Islamabad."
        />

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-card__index">
                {service.title
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
