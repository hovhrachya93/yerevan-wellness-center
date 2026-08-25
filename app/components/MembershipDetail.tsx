import type { Dictionary } from "../[lang]/dictionaries";
import Reveal from "./Reveal";
import cardStyles from "./Membership.module.css";
import styles from "./MembershipDetail.module.css";

const FEATURED_INDEX = 1;

export default function MembershipDetail({
  dict,
}: {
  dict: Dictionary["membershipPage"];
}) {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Reveal direction="up">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h1 className={styles.heading}>{dict.heading}</h1>
            <p className={styles.intro}>{dict.intro}</p>
          </Reveal>

          <div className={cardStyles.grid}>
            {dict.plans.map((plan, index) => {
              const featured = index === FEATURED_INDEX;
              return (
                <Reveal key={plan.name} direction="up" delay={index * 100}>
                  <div
                    className={`${cardStyles.card} ${featured ? cardStyles.cardFeatured : ""}`}
                  >
                    <h2 className={cardStyles.cardTitle}>{plan.name}</h2>
                    <p className={cardStyles.cardDescription}>{plan.description}</p>
                    <p className={styles.bestFor}>{plan.bestFor}</p>
                    <ul className={cardStyles.features}>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <a
                      href="https://www.instagram.com/yerevan_wellness/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${featured ? "btnPrimary" : "btnSecondary"} ${cardStyles.cardCta}`}
                    >
                      <span>{dict.ctaButton}</span>
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <Reveal direction="up">
            <h2 className={styles.faqHeading}>FAQ</h2>
          </Reveal>
          <div className={styles.faqList}>
            {dict.faq.map((item, index) => (
              <Reveal key={item.question} direction="left" delay={index * 60}>
                <details className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{item.question}</summary>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <Reveal direction="up" className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaHeading}>{dict.ctaHeading}</h2>
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
