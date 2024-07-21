import Link from "next/link";
import Header from "@/components/Header";
import GridContents from "@/components/GridContents";
import { getPageData } from "@/global/notion";

export const revalidate = 0;

export default async function Main() {
  const pages = await getPageData("");
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
        <h1 className="text-2xl font-bold">FE 기술 면접 Q&A 위키</h1>
        <div className="grow"></div>
        <Link href={"/about"}>About</Link>
      </Header>
      <section className="grid pb-6 grid-cols-1 lg:grid-cols-2">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <GridContents key={`${index}_${category}`} category={category} pages={pages} restrict={4} />
          ))}
      </section>
    </>
  );
}
