import { ClockIcon, InstagramIcon, PinIcon } from "./icons";
import type { Dictionary } from "../[lang]/dictionaries";
import Reveal from "./Reveal";
import OpenStatusBadge from "./OpenStatusBadge";
import visitStyles from "./Visit.module.css";
import styles from "./VisitDetail.module.css";

export default function VisitDetail({
  dict,
  openStatus,
}: {
  dict: Dictionary["visitPage"];
  openStatus: Dictionary["openStatus"];
}) {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Reveal direction="up">
            <p className="eyebrow">{dict.eyebrow}</p>
            <h1 className={styles.heading}>{dict.heading}</h1>
            <p className={styles.intro}>{dict.intro}</p>
            <OpenStatusBadge dict={openStatus} className={styles.statusBadge} />
          </Reveal>

          <div className={styles.topGrid}>
            <Reveal direction="left">
              <div className={visitStyles.infoRow}>
                <PinIcon className={visitStyles.infoIcon} />
                <div>
                  <p className={visitStyles.infoLabel}>{dict.location.label}</p>
                  <p className={visitStyles.infoValue}>{dict.location.value}</p>
                  <p className={styles.note}>{dict.location.note}</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=31+Khanjyan+St,+Yerevan+0010,+Armenia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detailsLink"
                  >
                    {dict.getDirections} →
                  </a>
                </div>
              </div>

              <div className={visitStyles.infoRow}>
                <ClockIcon className={visitStyles.infoIcon} />
                <div>
                  <p className={visitStyles.infoLabel}>{dict.hoursLabel}</p>
                  <dl className={visitStyles.hoursList}>
                    {dict.hours.map((row) => (
                      <div key={row.day}>
                        <dt>{row.day}</dt>
                        <dd>{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100} className={visitStyles.instaCard}>
              <div className={visitStyles.instaCardInner}>
                <div className={visitStyles.instaIconWrap}>
                  <InstagramIcon className={visitStyles.instaIcon} />
                </div>
                <p className={visitStyles.instaHandle}>{dict.instagramHandle}</p>
                <p className={visitStyles.instaText}>{dict.instagramText}</p>
                <a
                  href="https://www.instagram.com/yerevan_wellness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={visitStyles.instaCta}
                >
                  <InstagramIcon className={visitStyles.instaCtaIcon} />
                  <span>{dict.instagramCta}</span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps?q=31+Khanjyan+St,+Yerevan+0010,+Armenia&output=embed"
              title="Map to 31 Khanjyan St, Yerevan"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.infoSection}`}>
        <div className="container">
          <div className={styles.infoGrid}>
            {dict.info.map((item, index) => (
              <Reveal
                key={item.title}
                direction="up"
                delay={(index % 4) * 80}
                className={styles.infoCard}
              >
                <h2 className={styles.infoTitle}>{item.title}</h2>
                <p className={styles.infoText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
