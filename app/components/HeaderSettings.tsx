"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { locales, localeLabels, type Locale } from "../i18n";
import { ChevronDownIcon, GlobeIcon, MoonIcon, SunIcon } from "./icons";
import styles from "./HeaderSettings.module.css";

type Theme = "light" | "dark";

export default function HeaderSettings({
  current,
  labelLight,
  labelDark,
}: {
  current: Locale;
  labelLight: string;
  labelDark: string;
}) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const wrapRef = useRef<HTMLDivElement>(null);

  // Re-applies the stored theme after React's dev-mode remount clears the
  // attribute the inline script set; a no-op in production.
  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: Theme = stored === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  }

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <GlobeIcon className={styles.triggerIcon} />
        {localeLabels[current]}
        <ChevronDownIcon className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} />
      </button>

      {open && (
        <div className={styles.panel} role="menu">
          <div className={styles.langGrid}>
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                role="menuitem"
                className={`${styles.langItem} ${locale === current ? styles.langItemActive : ""}`}
                onClick={() => setOpen(false)}
              >
                {localeLabels[locale]}
              </Link>
            ))}
          </div>

          <button type="button" className={styles.themeItem} onClick={toggleTheme} role="menuitem">
            {theme === "dark" ? (
              <SunIcon className={styles.themeIcon} />
            ) : (
              <MoonIcon className={styles.themeIcon} />
            )}
            {theme === "dark" ? labelLight : labelDark}
          </button>
        </div>
      )}
    </div>
  );
}
