import { about } from "../data/profile";
import { Reveal } from "./motion";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">00 — About</span>
        </Reveal>

        <div className="about">
          <Reveal>
            <h2 className="about__lead">
              I care about writing clean, well-tested code and designing systems
              that <em>stay reliable under load.</em>
            </h2>
            <div className="about__body">
              {about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="about__panel" delay={0.1}>
            <div className="about__panel-group">
              {about.skills.map((group) => (
                <div key={group.label}>
                  <h4>{group.label}</h4>
                  <div className="about__row">
                    {group.items.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <h4>Certifications</h4>
                <div className="about__row">
                  {about.certifications.map((c) => (
                    <span className="tag" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
