import { OpeningSlot } from "./answer";

export default {
  openingSlots: [
    { isoWeekday: 3, opensAt: "14:15", closesAt: "18:00" },
    { isoWeekday: 4, opensAt: "09:00", closesAt: "12:00" },
    { isoWeekday: 2, opensAt: "14:00", closesAt: "18:30" },
    { isoWeekday: 5, opensAt: "09:15", closesAt: "11:45" },
    { isoWeekday: 2, opensAt: "09:00", closesAt: "12:00" },
    { isoWeekday: 1, opensAt: "14:00", closesAt: "18:30" },
    { isoWeekday: 3, opensAt: "09:15", closesAt: "11:45" },
    { isoWeekday: 4, opensAt: "14:00", closesAt: "18:30" },
    { isoWeekday: 1, opensAt: "09:00", closesAt: "12:00" },
  ],
  isoWeekday: 3,
} as { openingSlots: OpeningSlot[]; isoWeekday: number };
