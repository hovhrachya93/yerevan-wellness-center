import type { Dictionary } from "./[lang]/dictionaries";
import type { DayKey, RoomKey } from "./schedule-data";

const JS_DAY_TO_KEY: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export function getTodayKey(): DayKey {
  return JS_DAY_TO_KEY[new Date().getDay()];
}

function toMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function isLiveNow(start: string, end: string, now: Date): boolean {
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  return nowMinutes >= toMinutes(start) && nowMinutes < toMinutes(end);
}

export function roomLabel(room: RoomKey, dict: Dictionary["schedule"]): string {
  if (room === "pool") return dict.pool;
  return `${dict.roomLabel} ${room.replace("room", "")}`;
}
