import Image from "next/image";
import type { Dictionary } from "../[lang]/dictionaries";
import Reveal from "./Reveal";
import decor from "./ClassDecor.module.css";
import styles from "./Hero.module.css";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />
      <Image
        src="/classes/swimming.png"
        alt=""
        width={800}
        height={800}
        className={`${decor.decor} ${decor.topRight}`}
      />
      <Image
        src="/classes/meditation.png"
        alt=""
        width={800}
        height={800}
        className={`${decor.decor} ${decor.bottomLeft}`}
      />
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h1 className={styles.title}>{dict.title}</h1>
          <p className={styles.lead}>{dict.lead}</p>
          <div className={styles.actions}>
            <a href="#membership" className="btn btnPrimary">
              {dict.ctaPrimary}
            </a>
            <a
              href="https://www.instagram.com/yerevan_wellness/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnSecondary"
            >
              <span>{dict.ctaSecondary}</span>
            </a>
          </div>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <dl className={styles.stats}>
            <div>
              <dt>{dict.stats.facilitiesLabel}</dt>
              <dd>{dict.stats.facilitiesValue}</dd>
            </div>
            <div>
              <dt>{dict.stats.weekdaysLabel}</dt>
              <dd>{dict.stats.weekdaysValue}</dd>
            </div>
            <div>
              <dt>{dict.stats.weekendsLabel}</dt>
              <dd>{dict.stats.weekendsValue}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
