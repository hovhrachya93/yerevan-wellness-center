import type { Dictionary } from "../[lang]/dictionaries";
import Reveal from "./Reveal";
import styles from "./CareersDetail.module.css";

export default function CareersDetail({ dict }: { dict: Dictionary["careersPage"] }) {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Reveal direction="up">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h1 className={styles.heading}>{dict.heading}</h1>
            <p className={styles.intro}>{dict.intro}</p>
          </Reveal>

          <div className={styles.perks}>
            {dict.perks.map((perk, index) => (
              <Reveal
                key={perk.title}
                direction="up"
                delay={(index % 4) * 80}
                className={styles.perkCard}
              >
                <h3 className={styles.perkTitle}>{perk.title}</h3>
                <p className={styles.perkText}>{perk.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.rolesSection}`}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.rolesHeading}>{dict.rolesHeading}</h2>
          </Reveal>

          <div className={styles.rolesGrid}>
            {dict.roles.map((role, index) => (
              <Reveal
                key={role.title}
                direction={index % 2 === 0 ? "left" : "right"}
                className={styles.roleCard}
              >
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleText}>{role.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <Reveal direction="up" className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaHeading}>{dict.ctaHeading}</h2>
            <p className={styles.ctaText}>{dict.ctaText}</p>
          </div>
          <a
            href="https://www.instagram.com/yerevan_wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
          >
            {dict.ctaButton}
          </a>
        </Reveal>
      </section>
    </main>
  );
}
