"use client";

import { useEffect, useMemo, useState } from "react";
import { dayOrder, roomOrder, schedule, type DayKey, type RoomKey } from "../schedule-data";
import { getTodayKey, isLiveNow, roomLabel } from "../schedule-utils";
import type { Dictionary } from "../[lang]/dictionaries";
import styles from "./ScheduleExplorer.module.css";

export default function ScheduleExplorer({ dict }: { dict: Dictionary["schedule"] }) {
  const [selectedDay, setSelectedDay] = useState<DayKey>("mon");
  const [selectedRoom, setSelectedRoom] = useState<RoomKey | "all">("all");
  const [now, setNow] = useState<Date | null>(null);
  const [todayKey, setTodayKey] = useState<DayKey | null>(null);

  useEffect(() => {
    const today = getTodayKey();
    setTodayKey(today);
    setSelectedDay(today);
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const sessions = useMemo(() => {
    const list = schedule[selectedDay];
    const filtered =
      selectedRoom === "all" ? list : list.filter((session) => session.room === selectedRoom);
    return [...filtered].sort((a, b) => a.start.localeCompare(b.start));
  }, [selectedDay, selectedRoom]);

  return (
    <div>
      <div className={styles.dayTabs} role="tablist" aria-label={dict.heading}>
        {dayOrder.map((day) => (
          <button
            key={day}
            type="button"
            role="tab"
            aria-selected={day === selectedDay}
            className={`${styles.dayTab} ${day === selectedDay ? styles.dayTabActive : ""}`}
            onClick={() => setSelectedDay(day)}
          >
            {dict.daysShort[day]}
            {day === todayKey && <span className={styles.todayDot} aria-hidden="true" />}
          </button>
        ))}
      </div>

      <div className={styles.roomChips}>
        <button
          type="button"
          className={`${styles.chip} ${selectedRoom === "all" ? styles.chipActive : ""}`}
          onClick={() => setSelectedRoom("all")}
        >
          {dict.allRooms}
        </button>
        {roomOrder.map((room) => (
          <button
            key={room}
            type="button"
            className={`${styles.chip} ${selectedRoom === room ? styles.chipActive : ""}`}
            onClick={() => setSelectedRoom(room)}
          >
            {roomLabel(room, dict)}
          </button>
        ))}
      </div>

      <h2 className={styles.dayHeading}>{dict.days[selectedDay]}</h2>

      {sessions.length === 0 ? (
        <p className={styles.empty}>{dict.noClasses}</p>
      ) : (
        <ul className={styles.list}>
          {sessions.map((session) => {
            const live =
              now !== null && selectedDay === todayKey && isLiveNow(session.start, session.end, now);
            return (
              <li
                key={`${session.start}-${session.name}-${session.room}`}
                className={`${styles.row} ${live ? styles.rowLive : ""}`}
              >
                <span className={styles.time}>
                  {session.start}–{session.end}
                </span>
                <span className={styles.name}>
                  {session.name}
                  {live && <span className={styles.liveBadge}>{dict.liveNow}</span>}
                </span>
                <span className={styles.room}>{roomLabel(session.room, dict)}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
