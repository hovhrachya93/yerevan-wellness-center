import Link from "next/link";
import { ClockIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon } from "./icons";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import Reveal from "./Reveal";
import OpenStatusBadge from "./OpenStatusBadge";
import styles from "./Visit.module.css";

export default function Visit({
  dict,
  openStatus,
  lang,
}: {
  dict: Dictionary["visit"];
  openStatus: Dictionary["openStatus"];
  lang: Locale;
}) {
  return (
    <section id="visit" className={`section ${styles.visit}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal direction="left">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className={styles.heading}>{dict.heading}</h2>
          <OpenStatusBadge dict={openStatus} className={styles.statusBadge} />

          <div className={styles.infoRow}>
            <PinIcon className={styles.infoIcon} />
            <div>
              <p className={styles.infoLabel}>{dict.locationLabel}</p>
              <p className={styles.infoValue}>{dict.locationValue}</p>
            </div>
          </div>

          <div className={styles.infoRow}>
            <ClockIcon className={styles.infoIcon} />
            <div>
              <p className={styles.infoLabel}>{dict.hoursLabel}</p>
              <dl className={styles.hoursList}>
                {dict.hours.map((row) => (
                  <div key={row.day}>
                    <dt>{row.day}</dt>
                    <dd>{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className={styles.infoRow}>
            <PhoneIcon className={styles.infoIcon} />
            <div>
              <p className={styles.infoLabel}>{dict.phoneLabel}</p>
              <p className={styles.infoValue}>
                <a href="tel:+37410331000">{dict.phoneValue}</a>
              </p>
            </div>
          </div>

          <Link href={`/${lang}/visit`} className="detailsLink">
            {dict.detailsCta} →
          </Link>
        </Reveal>

        <div className={styles.socialCards}>
          <p className={styles.socialText}>{dict.instagramText}</p>

          <div className={styles.socialCardsRow}>
            <Reveal direction="right" delay={100} className={`${styles.instaCard} ${styles.instagramCard}`}>
              <div className={styles.instaCardInner}>
                <div className={styles.instaIconWrap}>
                  <InstagramIcon className={styles.instaIcon} />
                </div>
                <p className={styles.instaHandle}>{dict.instagramHandle}</p>
                <a
                  href="https://www.instagram.com/yerevan_wellness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instaCta}
                >
                  <InstagramIcon className={styles.instaCtaIcon} />
                  <span>{dict.instagramCta}</span>
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" delay={180} className={`${styles.instaCard} ${styles.facebookCard}`}>
              <div className={styles.instaCardInner}>
                <div className={styles.instaIconWrap}>
                  <FacebookIcon className={styles.instaIcon} />
                </div>
                <p className={styles.instaHandle}>{dict.facebookHandle}</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61592994126865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instaCta}
                >
                  <FacebookIcon className={styles.instaCtaIcon} />
                  <span>{dict.facebookCta}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
