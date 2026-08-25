"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import HeaderSettings from "./HeaderSettings";
import styles from "./Header.module.css";

const REVEAL_THRESHOLD = 80;
const IDLE_REVEAL_DELAY = 400;

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
    let idleTimer: ReturnType<typeof setTimeout>;

    function reveal() {
      setHidden(false);
    }

    function handleScroll() {
      if (window.scrollY < REVEAL_THRESHOLD) {
        reveal();
      } else {
        setHidden(true);
      }

      clearTimeout(idleTimer);
      idleTimer = setTimeout(reveal, IDLE_REVEAL_DELAY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Fires precisely when the browser considers scrolling (including
    // trackpad momentum) to have fully settled; the timer above is a
    // fallback for browsers that don't support it yet.
    window.addEventListener("scrollend", reveal, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", reveal);
      clearTimeout(idleTimer);
    };
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
