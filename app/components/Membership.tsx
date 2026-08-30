import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import Reveal from "./Reveal";
import styles from "./Membership.module.css";

const DECOR_SIZES = "(max-width: 640px) 180px, (max-width: 833px) 200px, (max-width: 1583px) 24vw, 380px";

const FEATURED_INDEX = 1;

export default function Membership({
  dict,
  lang,
}: {
  dict: Dictionary["membership"];
  lang: Locale;
}) {
  return (
    <section id="membership" className={`section ${styles.membership}`}>
      <Image
        src="/classes/pilates.png"
        alt=""
        width={800}
        height={800}
        sizes={DECOR_SIZES}
        className={styles.decorImage}
      />
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className={styles.heading}>{dict.heading}</h2>
          <p className={styles.subheading}>{dict.subheading}</p>
        </Reveal>

        <div className={styles.grid}>
          {dict.plans.map((plan, index) => {
            const featured = index === FEATURED_INDEX;
            return (
              <Reveal key={plan.name} direction="up" delay={index * 100}>
                <div className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}>
                  {featured && <span className={styles.badge}>{dict.mostPopular}</span>}
                  <h3 className={styles.cardTitle}>{plan.name}</h3>
                  <p className={styles.cardDescription}>{plan.description}</p>
                  <ul className={styles.features}>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    href="https://www.instagram.com/yerevan_wellness/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${featured ? "btnPrimary" : "btnSecondary"} ${styles.cardCta}`}
                  >
                    <span>{dict.cta}</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Link href={`/${lang}/membership`} className="detailsLink">
          {dict.detailsCta} →
        </Link>
      </div>
    </section>
  );
}
