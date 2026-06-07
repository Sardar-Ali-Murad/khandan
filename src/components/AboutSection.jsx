import { aboutPoints } from "../data/companyInfo";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="section section--intro" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About the group"
          title="One team for the full property journey."
          description="From the first inquiry to final handover, our approach is centered on clarity, trust, and dependable guidance for every stage of a property decision."
        />

        <div className="about-grid">
          <article className="about-card about-card--story">
            <h3>What the company stands for</h3>
            <p>
              Din Muhammad Group Of Companies - Pvt Ltd is positioned as a
              practical property partner for clients who want less confusion
              and more direction while buying, selling, developing, or
              planning construction work.
            </p>
            <p>
              Our focus is to provide honest communication, thoughtful planning,
              and reliable support so clients can move forward with greater
              confidence.
            </p>
          </article>

          <article className="about-card about-card--points">
            <h3>What clients can expect</h3>
            <ul className="check-list check-list--dark">
              {aboutPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
