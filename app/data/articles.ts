import raw from "./articles.json";

export type Article = {
  id: number;
  title: string;
  title1: string;
  variant: "dark" | "light";
  notchX: number;
  notchW: number;
  page1: string;
  img1: string;
  page2: string;
  img2: string;
  page3: string;
  img3: string | null;
  page4: string | null;
  img4: string | null;
  draft?: boolean;
};

const articles = raw as Article[];

export function getArticles(): Article[] {
  return articles;
}

export function getArticle(id: string): Article | undefined {
  return articles.find((a) => String(a.id) === id);
}

export function getPublishedIds(): string[] {
  return articles.filter((a) => !a.draft).map((a) => String(a.id));
}
