import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareersDetail from "../../components/CareersDetail";
import { getDictionary, hasLocale } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/careers">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: `${dict.careersPage.heading} — ${dict.meta.title}`,
    description: dict.careersPage.intro,
  };
}

export default async function CareersPage({ params }: PageProps<"/[lang]/careers">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return <CareersDetail dict={dict.careersPage} />;
}
