import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import Reveal from "./Reveal";
import styles from "./About.module.css";

export default function About({
  dict,
  lang,
}: {
  dict: Dictionary["about"];
  lang: Locale;
}) {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal direction="left">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className={styles.heading}>{dict.heading}</h2>
          <p className={styles.text}>{dict.paragraph1}</p>
          <p className={styles.text}>{dict.paragraph2}</p>
          <Link href={`/${lang}/about`} className="detailsLink">
            {dict.detailsCta} →
          </Link>
        </Reveal>
        <Reveal direction="right" delay={100} className={styles.visual} aria-hidden="true">
          <Image
            src="/logo.png"
            alt=""
            width={900}
            height={753}
            className={styles.visualCrest}
          />
          <div className={styles.visualCard}>
            <span className={styles.visualBadge}>{dict.badge}</span>
            <p className={styles.visualCity}>{dict.city}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
