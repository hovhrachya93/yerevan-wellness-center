import { locales, type Locale } from "../i18n";
import type { DayKey } from "../schedule-data";

export type Dictionary = {
  meta: { title: string; description: string };
  openStatus: {
    openNow: string;
    closedNow: string;
    closesIn: string;
    opensIn: string;
    hourAbbr: string;
    minuteAbbr: string;
  };
  ticker: {
    items: string[];
  };
  nav: {
    about: string;
    services: string;
    schedule: string;
    membership: string;
    careers: string;
    visit: string;
    switchToLight: string;
    switchToDark: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      facilitiesLabel: string;
      facilitiesValue: string;
      weekdaysLabel: string;
      weekdaysValue: string;
      weekendsLabel: string;
      weekendsValue: string;
    };
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    badge: string;
    city: string;
    detailsCta: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: { title: string; description: string }[];
    detailsCta: string;
  };
  membership: {
    eyebrow: string;
    heading: string;
    subheading: string;
    mostPopular: string;
    cta: string;
    plans: { name: string; description: string; features: string[] }[];
    detailsCta: string;
  };
  visit: {
    eyebrow: string;
    heading: string;
    locationLabel: string;
    locationValue: string;
    hoursLabel: string;
    hours: { day: string; time: string }[];
    instagramHandle: string;
    instagramText: string;
    instagramCta: string;
    detailsCta: string;
  };
  footer: {
    tagline: string;
    city: string;
  };
  schedule: {
    eyebrow: string;
    heading: string;
    subheading: string;
    viewFull: string;
    allRooms: string;
    roomLabel: string;
    pool: string;
    liveNow: string;
    noClasses: string;
    days: Record<DayKey, string>;
    daysShort: Record<DayKey, string>;
  };
  aboutPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    story: { title: string; text: string }[];
    pillars: { title: string; text: string }[];
    timeline: { label: string; text: string }[];
    ctaHeading: string;
    ctaButton: string;
  };
  servicesPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; description: string; details: string[] }[];
    ctaHeading: string;
    ctaButton: string;
  };
  membershipPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    plans: { name: string; description: string; bestFor: string; features: string[] }[];
    faq: { question: string; answer: string }[];
    ctaHeading: string;
    ctaButton: string;
  };
  visitPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    location: { label: string; value: string; note: string };
    getDirections: string;
    hoursLabel: string;
    hours: { day: string; time: string }[];
    info: { title: string; text: string }[];
    instagramHandle: string;
    instagramText: string;
    instagramCta: string;
  };
  careers: {
    eyebrow: string;
    heading: string;
    text: string;
    roles: string[];
    detailsCta: string;
  };
  careersPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    perks: { title: string; text: string }[];
    rolesHeading: string;
    roles: { title: string; text: string }[];
    ctaHeading: string;
    ctaText: string;
    ctaButton: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  hy: () => import("./dictionaries/hy.json").then((m) => m.default as Dictionary),
  ru: () => import("./dictionaries/ru.json").then((m) => m.default as Dictionary),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default as Dictionary),
};

export const hasLocale = (locale: string): locale is Locale =>
  (locales as string[]).includes(locale);

export const getDictionary = (locale: Locale) => dictionaries[locale]();
