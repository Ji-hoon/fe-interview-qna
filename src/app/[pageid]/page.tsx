import { getData } from "@/global/notion";
import { NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";

export default async function Detail({ params }: { params: { pageid: string } }) {
  const data = await getData(params.pageid);

  const blocks = Object.values(data.block);
  console.log(blocks[0].value.properties["N~sy"][0]);
  // console.log(data.block["6b0b5e1c-9ac2-40ba-a2b4-9664cadb2c5c"].value.properties.title);

  return (
    <>
      <span className="px-3 py-1 bg-gray-100 text-sm rounded-2xl">{blocks[0].value.properties["N~sy"][0]}</span>
      <h1 className="text-2xl font-bold mt-3">{blocks[0].value.properties.title}</h1>
      {blocks.length > 3 ? (
        <ul className="py-4 flex flex-col gap-2">
          {blocks
            .filter((block, index) => index >= 3)
            .map((block, index) => {
              if (block.value.properties?.title) {
                return <li key={index}>{block.value.properties.title}</li>;
              }
            })}
        </ul>
      ) : (
        <p className="py-4 text-sm text-gray-500">작성된 내용이 없습니다.</p>
      )}
      {/* <NotionRenderer recordMap={data} fullPage={true} darkMode={false} rootPageId={params.pageid} previewImages /> */}
    </>
  );
}
