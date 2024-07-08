import Header from "@/components/Header";
import { getPageData } from "@/global/notion";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

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
        <Link href={"/"} className="back-button" title="홈으로">
          <FiChevronLeft size={24} strokeWidth={3} />
        </Link>
        {params.pageid || (
          <h3 className="header-category">
            {params.category}
            <span className="capsule-label">{pages.length}개의 질문</span>
          </h3>
        )}
      </Header>
      <div className="p-10 pt-8 category-container">{children}</div>
    </>
  );
}
