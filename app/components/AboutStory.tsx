import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import Reveal from "./Reveal";
import styles from "./AboutStory.module.css";

export default function AboutStory({
  dict,
  lang,
}: {
  dict: Dictionary["aboutPage"];
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

          <div className={styles.story}>
            {dict.story.map((block, index) => (
              <Reveal
                key={block.title}
                direction="up"
                delay={index * 100}
                className={styles.storyBlock}
              >
                <h2 className={styles.storyTitle}>{block.title}</h2>
                <p className={styles.storyText}>{block.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.pillarsSection}`}>
        <div className="container">
          <div className={styles.pillars}>
            {dict.pillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                direction="up"
                delay={(index % 4) * 80}
                className={styles.pillarCard}
              >
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.timeline}>
            {dict.timeline.map((item, index) => (
              <Reveal
                key={item.label}
                direction="left"
                delay={index * 100}
                className={styles.timelineItem}
              >
                <span className={styles.timelineLabel}>{item.label}</span>
                <p className={styles.timelineText}>{item.text}</p>
              </Reveal>
            ))}
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
