"use client";

import { useEffect, useState } from "react";
import { formatDuration, getOpenStatus, type OpenStatus } from "../open-status";
import type { Dictionary } from "../[lang]/dictionaries";
import styles from "./OpenStatusBadge.module.css";

export default function OpenStatusBadge({
  dict,
  className,
}: {
  dict: Dictionary["openStatus"];
  className?: string;
}) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    function update() {
      setStatus(getOpenStatus(new Date()));
    }
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  // Avoid an SSR/client mismatch flash: render nothing until the real,
  // Yerevan-local time is known on the client.
  if (!status) return null;

  const duration = formatDuration(status.minutesUntil, dict.hourAbbr, dict.minuteAbbr);

  return (
    <span className={`${styles.badge} ${status.open ? styles.open : styles.closed} ${className ?? ""}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.label}>{status.open ? dict.openNow : dict.closedNow}</span>
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.countdown}>
        {status.open ? dict.closesIn : dict.opensIn} {duration}
      </span>
    </span>
  );
}
