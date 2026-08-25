import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScheduleExplorer from "../../components/ScheduleExplorer";
import Reveal from "../../components/Reveal";
import { DECOR_IMAGE_SIZES } from "../../components/decorImage";
import { getDictionary, hasLocale } from "../dictionaries";
import styles from "../../components/ScheduleExplorer.module.css";
import decor from "../../components/ClassDecor.module.css";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/schedule">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: `${dict.schedule.heading} — ${dict.meta.title}`,
    description: dict.schedule.subheading,
  };
}

export default async function SchedulePage({ params }: PageProps<"/[lang]/schedule">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main>
      <section className={`section ${styles.hero}`}>
        <Image
          src="/classes/yoga.png"
          alt=""
          width={800}
          height={800}
          sizes={DECOR_IMAGE_SIZES}
          priority
          className={`${decor.decor} ${decor.topRight}`}
        />
        <Image
          src="/classes/spinning.png"
          alt=""
          width={800}
          height={800}
          sizes={DECOR_IMAGE_SIZES}
          priority
          className={`${decor.decor} ${decor.bottomLeft}`}
        />
        <div className={`container ${styles.heroInner}`}>
          <Reveal direction="up">
            <p className="eyebrow">{dict.schedule.eyebrow}</p>
            <h1 className={styles.pageHeading}>{dict.schedule.heading}</h1>
            <p className={styles.pageSubheading}>{dict.schedule.subheading}</p>
          </Reveal>
          <ScheduleExplorer dict={dict.schedule} />
        </div>
      </section>
    </main>
  );
}
