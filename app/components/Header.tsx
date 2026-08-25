"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import HeaderSettings from "./HeaderSettings";
import styles from "./Header.module.css";

const REVEAL_THRESHOLD = 80;
const SCROLL_DELTA_THRESHOLD = 4;

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary["nav"];
  lang: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;

      if (scrollY < REVEAL_THRESHOLD) {
        setHidden(false);
      } else if (Math.abs(delta) > SCROLL_DELTA_THRESHOLD) {
        setHidden(delta > 0);
      }

      lastScrollY = scrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${lang}#about`, label: dict.about },
    { href: `/${lang}#services`, label: dict.services },
    { href: `/${lang}/schedule`, label: dict.schedule },
    { href: `/${lang}#membership`, label: dict.membership },
    { href: `/${lang}#careers`, label: dict.careers },
    { href: `/${lang}#visit`, label: dict.visit },
  ];

  return (
    <header className={`${styles.header} ${hidden && !open ? styles.headerHidden : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}`} className={styles.logo} onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={33}
            className={styles.logoMark}
            priority
          />
          Yerevan Wellness
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className={styles.navControls}>
            <HeaderSettings
              current={lang}
              labelLight={dict.switchToLight}
              labelDark={dict.switchToDark}
            />
          </div>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
