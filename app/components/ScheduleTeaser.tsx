"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { schedule, type DayKey } from "../schedule-data";
import { getTodayKey, isLiveNow, roomLabel } from "../schedule-utils";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../i18n";
import Reveal from "./Reveal";
import { DECOR_IMAGE_SIZES } from "./decorImage";
import listStyles from "./ScheduleExplorer.module.css";
import decor from "./ClassDecor.module.css";
import styles from "./ScheduleTeaser.module.css";

const PREVIEW_COUNT = 4;

export default function ScheduleTeaser({
  dict,
  lang,
}: {
  dict: Dictionary["schedule"];
  lang: Locale;
}) {
  const [todayKey, setTodayKey] = useState<DayKey>("mon");
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setTodayKey(getTodayKey());
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const sessions = [...schedule[todayKey]]
    .sort((a, b) => a.start.localeCompare(b.start))
    .slice(0, PREVIEW_COUNT);

  return (
    <section id="schedule" className={`section ${styles.schedule}`}>
      <Image
        src="/classes/ballet.png"
        alt=""
        width={800}
        height={800}
        sizes={DECOR_IMAGE_SIZES}
        className={`${decor.decor} ${decor.topRight}`}
      />
      <div className={`container ${styles.inner}`}>
        <Reveal direction="up">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2 className={styles.heading}>{dict.heading}</h2>
          <p className={styles.subheading}>{dict.subheading}</p>
          <p className={styles.dayLabel}>{dict.days[todayKey]}</p>
        </Reveal>

        <Reveal direction="up" delay={120}>
          <ul className={listStyles.list}>
            {sessions.map((session) => {
              const live = now !== null && isLiveNow(session.start, session.end, now);
              return (
                <li
                  key={`${session.start}-${session.name}`}
                  className={`${listStyles.row} ${live ? listStyles.rowLive : ""}`}
                >
                  <span className={listStyles.time}>
                    {session.start}–{session.end}
                  </span>
                  <span className={listStyles.name}>
                    {session.name}
                    {live && <span className={listStyles.liveBadge}>{dict.liveNow}</span>}
                  </span>
                  <span className={listStyles.room}>{roomLabel(session.room, dict)}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Link href={`/${lang}/schedule`} className={`btn btnPrimary ${styles.cta}`}>
          {dict.viewFull}
        </Link>
      </div>
    </section>
  );
}
