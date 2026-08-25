import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MembershipDetail from "../../components/MembershipDetail";
import { getDictionary, hasLocale } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/membership">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: `${dict.membershipPage.heading} — ${dict.meta.title}`,
    description: dict.membershipPage.intro,
  };
}

export default async function MembershipPage({
  params,
}: PageProps<"/[lang]/membership">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return <MembershipDetail dict={dict.membershipPage} />;
}
