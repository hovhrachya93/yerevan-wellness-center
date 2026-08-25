const WEEKDAY_ORDER = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function isWeekendDay(weekday: string): boolean {
  return weekday === "Sat" || weekday === "Sun";
}

function hoursForDay(weekday: string): { open: number; close: number } {
  return isWeekendDay(weekday) ? { open: 8 * 60, close: 22 * 60 } : { open: 7 * 60, close: 23 * 60 };
}

function getYerevanParts(date: Date): { weekday: string; minutesOfDay: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Yerevan",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const weekday = map.weekday;
  let hour = parseInt(map.hour, 10);
  if (hour === 24) hour = 0;
  const minute = parseInt(map.minute, 10);
  return { weekday, minutesOfDay: hour * 60 + minute };
}

export type OpenStatus = {
  open: boolean;
  minutesUntil: number;
};

export function getOpenStatus(date: Date): OpenStatus {
  const { weekday, minutesOfDay } = getYerevanParts(date);
  const { open, close } = hoursForDay(weekday);

  if (minutesOfDay >= open && minutesOfDay < close) {
    return { open: true, minutesUntil: close - minutesOfDay };
  }

  if (minutesOfDay < open) {
    return { open: false, minutesUntil: open - minutesOfDay };
  }

  const index = WEEKDAY_ORDER.indexOf(weekday);
  const nextWeekday = WEEKDAY_ORDER[(index + 1) % 7];
  const nextOpen = hoursForDay(nextWeekday).open;
  return { open: false, minutesUntil: 24 * 60 - minutesOfDay + nextOpen };
}

export function formatDuration(minutes: number, hourAbbr: string, minuteAbbr: string): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0 && m > 0) return `${h}${hourAbbr} ${m}${minuteAbbr}`;
  if (h > 0) return `${h}${hourAbbr}`;
  return `${m}${minuteAbbr}`;
}
