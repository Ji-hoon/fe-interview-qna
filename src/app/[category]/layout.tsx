import Header from "@/components/Header";
import { getPageData } from "@/global/notion";
import Link from "next/link";

export default async function CategoryLayout({
  params,
  children,
}: Readonly<{
  params: { category: string; pageid: string };
  children: React.ReactNode;
}>) {
  const pages = await getPageData(params.category);
  return (
    <>
      <Header>
        <p className="w-[80px]">
          <Link href={"/"} className="flex gap-1">
            {/* <span className="arrow">←</span> */}홈으로
          </Link>
        </p>
        {params.pageid || (
          <h3 className="header-category">
            {params.category}
            <span className="capsule-label">{pages.length}개의 질문</span>
          </h3>
        )}
        <p className="w-[80px]"></p>
      </Header>
      <div className="p-10 pt-8 category-container">{children}</div>
    </>
  );
}
