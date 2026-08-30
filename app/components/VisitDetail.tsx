import { ClockIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon } from "./icons";
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

              <div className={visitStyles.infoRow}>
                <PhoneIcon className={visitStyles.infoIcon} />
                <div>
                  <p className={visitStyles.infoLabel}>{dict.phone.label}</p>
                  <p className={visitStyles.infoValue}>
                    <a href="tel:+37410331000">{dict.phone.value}</a>
                  </p>
                </div>
              </div>
            </Reveal>

            <div className={visitStyles.socialCards}>
              <p className={visitStyles.socialText}>{dict.instagramText}</p>

              <div className={visitStyles.socialCardsRow}>
                <Reveal
                  direction="right"
                  delay={100}
                  className={`${visitStyles.instaCard} ${visitStyles.instagramCard}`}
                >
                  <div className={visitStyles.instaCardInner}>
                    <div className={visitStyles.instaIconWrap}>
                      <InstagramIcon className={visitStyles.instaIcon} />
                    </div>
                    <p className={visitStyles.instaHandle}>{dict.instagramHandle}</p>
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

                <Reveal
                  direction="right"
                  delay={180}
                  className={`${visitStyles.instaCard} ${visitStyles.facebookCard}`}
                >
                  <div className={visitStyles.instaCardInner}>
                    <div className={visitStyles.instaIconWrap}>
                      <FacebookIcon className={visitStyles.instaIcon} />
                    </div>
                    <p className={visitStyles.instaHandle}>{dict.facebookHandle}</p>
                    <a
                      href="https://www.facebook.com/profile.php?id=61592994126865"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={visitStyles.instaCta}
                    >
                      <FacebookIcon className={visitStyles.instaCtaIcon} />
                      <span>{dict.facebookCta}</span>
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
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
