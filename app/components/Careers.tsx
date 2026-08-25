import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import Reveal from "./Reveal";
import styles from "./Careers.module.css";

export default function Careers({
  dict,
  lang,
}: {
  dict: Dictionary["careers"];
  lang: Locale;
}) {
  return (
    <section id="careers" className={`section ${styles.careers}`}>
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className={styles.heading}>{dict.heading}</h2>
          <p className={styles.text}>{dict.text}</p>

          <ul className={styles.roles}>
            {dict.roles.map((role) => (
              <li key={role} className={styles.role}>
                {role}
              </li>
            ))}
          </ul>

          <Link href={`/${lang}/careers`} className={`btn btnPrimary ${styles.cta}`}>
            {dict.detailsCta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
