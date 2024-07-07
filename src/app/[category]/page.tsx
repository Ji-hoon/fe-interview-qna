import GridContents from "@/components/GridContents";
import { getPageData } from "@/global/notion";

export default async function Category({ params }: { params: { category: string } }) {
  const pages = await getPageData(params.category);

  return <GridContents category={params.category} pages={pages.reverse()} headless={true} />;
}
