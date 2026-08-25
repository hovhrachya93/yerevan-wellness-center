import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./icons";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import styles from "./Footer.module.css";

export default function Footer({
  dict,
  nav,
  lang,
}: {
  dict: Dictionary["footer"];
  nav: Dictionary["nav"];
  lang: Locale;
}) {
  const navLinks = [
    { href: `/${lang}#about`, label: nav.about },
    { href: `/${lang}#services`, label: nav.services },
    { href: `/${lang}/schedule`, label: nav.schedule },
    { href: `/${lang}#membership`, label: nav.membership },
    { href: `/${lang}#careers`, label: nav.careers },
    { href: `/${lang}#visit`, label: nav.visit },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <Link href={`/${lang}`} className={styles.logo}>
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={30}
              className={styles.logoMark}
            />
            Yerevan Wellness
          </Link>
          <p className={styles.tagline}>{dict.tagline}</p>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.socialGroup}>
          <a
            href="https://www.instagram.com/yerevan_wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="Yerevan Wellness on Instagram"
          >
            <InstagramIcon className={styles.socialIcon} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61592994126865"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="Yerevan Wellness on Facebook"
          >
            <FacebookIcon className={styles.socialIcon} />
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} Yerevan Wellness Center
        </p>
        <a
          href="https://www.yerevan.am"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cityLink}
        >
          {dict.city}
        </a>
      </div>
    </footer>
  );
}
