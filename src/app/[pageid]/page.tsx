import { getData } from "@/global/notion";
import { NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";

export default async function Detail({ params }: { params: { pageid: string } }) {
  const data = await getData(params.pageid);

  const blocks = Object.values(data.block);
  console.log(blocks[5]?.value.properties.title[1]);
  // console.log(data.block["6b0b5e1c-9ac2-40ba-a2b4-9664cadb2c5c"].value.properties.title);

  return (
    <>
      <span className="capsule-label">{blocks[0].value.properties["N~sy"][0]}</span>
      <h1 className="text-2xl font-bold mt-3">{blocks[0].value.properties.title}</h1>
      {blocks.length > 3 ? (
        <ul className="py-4 flex flex-col gap-2">
          {blocks
            .filter((block, index) => index >= 3)
            .map((block, index) => {
              if (block.value.properties?.title) {
                return (
                  <li key={index}>
                    {block.value.properties.title.map((text: String[], index: number) => {
                      return (
                        <span key={index} className={text[1]?.[0][0] === "b" ? "font-bold text-indigo-600" : ""}>
                          {text[0]}
                        </span>
                      );
                    })}
                  </li>
                );
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
