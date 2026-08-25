import { notFound } from "next/navigation";
import About from "../components/About";
import Careers from "../components/Careers";
import Hero from "../components/Hero";
import Membership from "../components/Membership";
import ScheduleTeaser from "../components/ScheduleTeaser";
import Services from "../components/Services";
import Visit from "../components/Visit";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero dict={dict.hero} />
      <About dict={dict.about} lang={lang} />
      <Services dict={dict.services} lang={lang} />
      <ScheduleTeaser dict={dict.schedule} lang={lang} />
      <Membership dict={dict.membership} lang={lang} />
      <Careers dict={dict.careers} lang={lang} />
      <Visit dict={dict.visit} openStatus={dict.openStatus} lang={lang} />
    </main>
  );
}
