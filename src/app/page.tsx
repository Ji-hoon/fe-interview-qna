import { notionDatabase } from "@/global/notion";
import Link from "next/link";
import Header from "@/components/Header";
import { PageType } from "@/global/types";
import GridContents from "@/components/GridContents";

export default async function Main() {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error("데이터베이스 아이디가 없습니다.");
  }
  const db = await notionDatabase.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const pages = db.results as unknown as PageType[];

  console.log(pages);

  const categories = Array.from(
    new Set(
      pages.reverse().map((page) => {
        return page.properties.Select.select.name;
      })
    )
  );

  return (
    <>
      <Header>
        <h1 className="text-2xl font-bold">FE 인터뷰 질문 위키</h1>
        <div className="grow"></div>
        <Link href={"/about"}>About</Link>
      </Header>
      <section className="grid pb-6 grid-cols-1 lg:grid-cols-2">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <GridContents key={`${index}_${category}`} category={category} pages={pages} />
          ))}
      </section>
    </>
  );
}
