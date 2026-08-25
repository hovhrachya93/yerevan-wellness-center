import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import { SERVICE_ICONS } from "../service-icons";
import Reveal from "./Reveal";
import styles from "./ServicesGuide.module.css";

export default function ServicesGuide({
  dict,
  lang,
}: {
  dict: Dictionary["servicesPage"];
  lang: Locale;
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

          <div className={styles.list}>
            {dict.items.map((item, index) => {
              const Icon = SERVICE_ICONS[index];
              return (
                <Reveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={styles.row}
                >
                  <div className={styles.rowHead}>
                    <Icon className={styles.icon} />
                    <div>
                      <h2 className={styles.rowTitle}>{item.title}</h2>
                      <p className={styles.rowDescription}>{item.description}</p>
                    </div>
                  </div>
                  <ul className={styles.details}>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <Reveal direction="up" className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaHeading}>{dict.ctaHeading}</h2>
          <Link href={`/${lang}/membership`} className="btn btnPrimary">
            {dict.ctaButton}
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
