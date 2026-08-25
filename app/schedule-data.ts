export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type RoomKey = "room1" | "room2" | "room3" | "room4" | "pool";

export type ClassSession = {
  start: string;
  end: string;
  name: string;
  room: RoomKey;
};

export const dayOrder: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const roomOrder: RoomKey[] = ["room1", "room2", "room3", "room4", "pool"];

export const schedule: Record<DayKey, ClassSession[]> = {
  mon: [
    { start: "09:00", end: "09:55", name: "Pilates", room: "room3" },
    { start: "10:00", end: "10:55", name: "Body Sculpt", room: "room2" },
    { start: "10:00", end: "10:55", name: "Stretching", room: "room3" },
    { start: "11:00", end: "11:50", name: "Aqua", room: "pool" },
    { start: "11:00", end: "11:55", name: "Antigravity", room: "room3" },
    { start: "12:00", end: "12:55", name: "Lower Body", room: "room2" },
    { start: "12:00", end: "12:55", name: "Yoga", room: "room3" },
    { start: "13:00", end: "13:55", name: "Body Ballet", room: "room2" },
    { start: "14:00", end: "14:55", name: "National Dance", room: "room2" },
    { start: "18:30", end: "19:25", name: "Yoga", room: "room3" },
    { start: "19:00", end: "19:50", name: "Aqua", room: "pool" },
    { start: "19:00", end: "19:55", name: "Abs", room: "room2" },
    { start: "19:00", end: "19:55", name: "Fitboxing", room: "room1" },
    { start: "19:30", end: "20:25", name: "Stretching", room: "room3" },
  ],
  tue: [
    { start: "09:00", end: "09:55", name: "Spinning", room: "room4" },
    { start: "10:00", end: "10:55", name: "Antigravity", room: "room3" },
    { start: "11:00", end: "11:50", name: "Step", room: "room2" },
    { start: "11:00", end: "11:50", name: "Aqua", room: "pool" },
    { start: "12:00", end: "12:55", name: "Abs & Stretch", room: "room2" },
    { start: "13:00", end: "13:55", name: "Latin Dance", room: "room2" },
    { start: "14:00", end: "14:55", name: "Pilates", room: "room3" },
    { start: "17:30", end: "18:25", name: "Prenatal Fitness", room: "room3" },
    { start: "18:30", end: "19:25", name: "Lower Body", room: "room2" },
    { start: "18:30", end: "19:25", name: "Pilates", room: "room3" },
    { start: "19:15", end: "20:05", name: "Aqua", room: "pool" },
    { start: "19:30", end: "20:25", name: "Spinning", room: "room4" },
    { start: "19:30", end: "20:25", name: "National Dance", room: "room2" },
    { start: "19:30", end: "20:25", name: "Antigravity", room: "room3" },
  ],
  wed: [
    { start: "09:00", end: "09:55", name: "Yoga", room: "room3" },
    { start: "10:00", end: "10:55", name: "Kick Boxing", room: "room1" },
    { start: "10:00", end: "10:55", name: "Pump", room: "room2" },
    { start: "11:00", end: "11:55", name: "Antigravity", room: "room3" },
    { start: "11:00", end: "11:50", name: "Aqua", room: "pool" },
    { start: "12:00", end: "12:55", name: "Functional", room: "room2" },
    { start: "12:00", end: "12:55", name: "Stretching", room: "room3" },
    { start: "13:00", end: "13:55", name: "TRX", room: "room3" },
    { start: "14:00", end: "14:55", name: "Pilates", room: "room3" },
    { start: "15:00", end: "15:50", name: "Aqua", room: "pool" },
    { start: "18:30", end: "19:25", name: "Stretching", room: "room3" },
    { start: "19:30", end: "20:25", name: "Functional", room: "room2" },
    { start: "19:30", end: "20:25", name: "Yoga", room: "room3" },
    { start: "20:00", end: "20:55", name: "Kick Boxing", room: "room1" },
  ],
  thu: [
    { start: "09:00", end: "09:55", name: "Pilates", room: "room3" },
    { start: "10:00", end: "10:55", name: "Stretching", room: "room3" },
    { start: "10:00", end: "10:55", name: "Women's Self Defense", room: "room1" },
    { start: "11:00", end: "11:50", name: "Bosu", room: "room2" },
    { start: "12:00", end: "12:50", name: "Aqua", room: "pool" },
    { start: "12:00", end: "12:55", name: "Spinning", room: "room4" },
    { start: "13:00", end: "13:55", name: "Booty Barre", room: "room2" },
    { start: "14:00", end: "14:55", name: "Body Ballet", room: "room2" },
    { start: "15:00", end: "15:55", name: "Yoga", room: "room3" },
    { start: "17:15", end: "18:05", name: "Prenatal Aqua", room: "pool" },
    { start: "18:00", end: "18:55", name: "Yoga", room: "room3" },
    { start: "18:30", end: "19:25", name: "Abs", room: "room2" },
    { start: "19:00", end: "19:50", name: "Aqua", room: "pool" },
    { start: "19:30", end: "20:25", name: "Spinning", room: "room4" },
    { start: "19:30", end: "20:25", name: "Boxing", room: "room1" },
    { start: "19:30", end: "20:25", name: "Body Ballet", room: "room2" },
  ],
  fri: [
    { start: "09:00", end: "09:55", name: "Spinning", room: "room4" },
    { start: "10:00", end: "10:55", name: "Antigravity", room: "room3" },
    { start: "10:00", end: "10:55", name: "Kick Boxing", room: "room1" },
    { start: "11:00", end: "11:55", name: "Upper Body & Core", room: "room2" },
    { start: "12:00", end: "12:55", name: "Stretching", room: "room3" },
    { start: "13:00", end: "13:50", name: "Aqua", room: "pool" },
    { start: "13:00", end: "13:55", name: "Lower Body", room: "room2" },
    { start: "14:00", end: "14:55", name: "Latin Dance", room: "room2" },
    { start: "15:00", end: "15:55", name: "Pilates", room: "room3" },
    { start: "18:30", end: "19:25", name: "Step", room: "room2" },
    { start: "18:30", end: "19:25", name: "Antigravity", room: "room3" },
    { start: "19:30", end: "20:25", name: "Lower Body", room: "room2" },
    { start: "19:30", end: "20:25", name: "Pilates", room: "room3" },
    { start: "19:30", end: "20:25", name: "Kick Boxing", room: "room1" },
  ],
  sat: [
    { start: "11:00", end: "11:55", name: "Pilates", room: "room3" },
    { start: "11:00", end: "11:50", name: "Aqua", room: "pool" },
    { start: "12:00", end: "12:55", name: "Zumba", room: "room2" },
    { start: "12:00", end: "12:55", name: "TRX", room: "room3" },
    { start: "12:00", end: "12:55", name: "Kick Boxing", room: "room1" },
    { start: "13:00", end: "13:55", name: "Yoga", room: "room3" },
    { start: "13:00", end: "13:55", name: "Spinning", room: "room4" },
    { start: "14:00", end: "14:55", name: "Functional", room: "room2" },
    { start: "14:00", end: "14:55", name: "Prenatal Fitness", room: "room3" },
    { start: "15:00", end: "15:55", name: "Stretching", room: "room3" },
  ],
  sun: [
    { start: "12:00", end: "12:55", name: "Booty Barre", room: "room2" },
    { start: "13:00", end: "13:50", name: "Aqua", room: "pool" },
    { start: "14:00", end: "14:55", name: "Yoga", room: "room3" },
  ],
};
