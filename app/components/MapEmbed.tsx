"use client";

import { useState } from "react";
import { PinIcon } from "./icons";
import styles from "./MapEmbed.module.css";

export default function MapEmbed({
  src,
  title,
  label,
}: {
  src: string;
  title: string;
  label: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      />
    );
  }

  return (
    <button type="button" className={styles.facade} onClick={() => setLoaded(true)}>
      <PinIcon className={styles.facadeIcon} />
      <span>{label}</span>
    </button>
  );
}
