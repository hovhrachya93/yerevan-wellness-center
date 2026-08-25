import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import { SERVICE_ICONS } from "../service-icons";
import Reveal from "./Reveal";
import decor from "./ClassDecor.module.css";
import styles from "./Services.module.css";

export default function Services({
  dict,
  lang,
}: {
  dict: Dictionary["services"];
  lang: Locale;
}) {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <Image
        src="/classes/boxing.png"
        alt=""
        width={800}
        height={800}
        className={`${decor.decor} ${decor.bottomRight}`}
      />
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className={styles.heading}>{dict.heading}</h2>
        </Reveal>

        <div className={styles.grid}>
          {dict.items.map((item, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <Reveal
                key={item.title}
                direction="up"
                delay={(index % 4) * 80}
                className={styles.card}
              >
                <Icon className={styles.icon} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </Reveal>
            );
          })}
        </div>

        <Link href={`/${lang}/services`} className="detailsLink">
          {dict.detailsCta} →
        </Link>
      </div>
    </section>
  );
}
