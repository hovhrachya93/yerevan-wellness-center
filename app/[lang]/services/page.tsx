import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesGuide from "../../components/ServicesGuide";
import { getDictionary, hasLocale } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: `${dict.servicesPage.heading} — ${dict.meta.title}`,
    description: dict.servicesPage.intro,
  };
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return <ServicesGuide dict={dict.servicesPage} lang={lang} />;
}
