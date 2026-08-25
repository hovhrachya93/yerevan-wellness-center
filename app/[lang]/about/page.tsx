import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutStory from "../../components/AboutStory";
import { getDictionary, hasLocale } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: `${dict.aboutPage.heading} — ${dict.meta.title}`,
    description: dict.aboutPage.intro,
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return <AboutStory dict={dict.aboutPage} lang={lang} />;
}
