import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VisitDetail from "../../components/VisitDetail";
import { getDictionary, hasLocale } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/visit">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: `${dict.visitPage.heading} — ${dict.meta.title}`,
    description: dict.visitPage.intro,
  };
}

export default async function VisitPage({ params }: PageProps<"/[lang]/visit">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return <VisitDetail dict={dict.visitPage} openStatus={dict.openStatus} />;
}
