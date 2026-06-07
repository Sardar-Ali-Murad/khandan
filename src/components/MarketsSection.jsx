import { marketCards } from "../data/companyInfo";
import { SectionHeading } from "./SectionHeading";

export function MarketsSection() {
  return (
    <section className="section section--markets" id="coverage">
      <div className="container">
        <SectionHeading
          eyebrow="Coverage"
          title="Built to speak to the markets that matter most."
          description="We serve clients with local market understanding in Multan, regional reach across South Punjab, and growing opportunities for property guidance in Islamabad."
        />

        <div className="markets-grid">
          {marketCards.map((market) => (
            <article key={market.title} className="market-card">
              <h3>{market.title}</h3>
              <p>{market.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
