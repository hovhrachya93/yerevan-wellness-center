export type Locale = "en" | "hy" | "ru" | "fr";

export const locales: Locale[] = ["hy", "en", "ru", "fr"];

export const defaultLocale: Locale = "hy";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  hy: "ՀԱՅ",
  ru: "РУС",
  fr: "FR",
};
