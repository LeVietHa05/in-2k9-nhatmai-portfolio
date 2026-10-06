import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getArticles, getPublishedIds } from "@/app/data/articles";

export function generateStaticParams() {
  return getPublishedIds().map((id) => ({ slug: id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/detail/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article || article.draft) {
    return {};
  }

  return { title: `${article.title1} — Nhat Mai Portfolio` };
}

export default async function DetailPage({
  params,
}: PageProps<"/detail/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article || article.draft) {
    notFound();
  }

  const sections = [
    { text: article.page1, image: article.img1 },
    { text: article.page2, image: article.img2 },
    { text: article.page3, image: article.img3 || null },
    { text: article.page4 || null, image: article.img4 || null },
  ];

  const index = getArticles().findIndex((a) => a.id === article.id);

  return (
    <div className="max-w-[1440px] mx-auto bg-white text-black font-[var(--font-inter)]">
      <Image src={"/home/1.png"} alt="" width={1440} height={829}></Image>
      <div className="px-12 py-16">
        <Link
          href="/"
          className="flex  items-center gap-4 text-xl uppercase tracking-wide underline underline-offset-4 hover:no-underline"
        >
          <Image src={"/arrow-left.png"} alt="" width={36} height={36}></Image>
          Back to Home
        </Link>

        <div className="border-2 border-black my-8"></div>

        <h1 className="font-bold text-[74px] uppercase pt-8 drop-shadow-2xl leading-[1.05]">
          {article.title}
        </h1>

        <div className="text-xl text-black font-bold  pt-2 mb-8">
          {article.title1}
        </div>
        <hr />
        <div className="text-2xl space-y-6">
          {sections.map((section, i) => (
            <section key={i}>
              <p>
                {section.text &&
                  section.text.split("\n").map((paragraph, i) => (
                    <p key={i} className="mt-4">
                      {paragraph.trim()}
                    </p>
                  ))}
              </p>
              {section.image && (
                <div className="mt-8">
                  <Image
                    src={section.image}
                    alt={`${article.title} — ${i + 1}`}
                    width={1440}
                    height={960}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="border-2 border-black my-8"></div>

        <div className="flex items-center justify-between">
          <div className="text-[32px] uppercase">
            {index + 1} / {getArticles().length}
          </div>
          <div className="flex gap-6 text-xl uppercase">
            {getPublishedIds().map((id, i) => (
              <Link
                key={id}
                href={`/detail/${id}`}
                className={
                  id === slug
                    ? "underline underline-offset-4"
                    : "underline-offset-4 hover:underline"
                }
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
