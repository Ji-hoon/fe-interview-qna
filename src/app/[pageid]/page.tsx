import { getData } from "@/global/notion";
import Blocks from "@/components/Blocks";
import * as notion from "notion-types";

// import { NotionRenderer } from "react-notion-x";
// import "react-notion-x/src/styles.css";

export default async function Detail({ params }: { params: { pageid: string } }) {
  const data = await getData(params.pageid);

  const blocks = Object.values(data.block);
  // console.log(blocks[5]?.value.properties.title[1]);
  // console.log(blocks[0].value.properties["N~sy"][0]);
  // console.log(data.block["6b0b5e1c-9ac2-40ba-a2b4-9664cadb2c5c"].value.properties.title);

  return (
    <>
      <div className="flex gap-2">
        {blocks[0].value.properties["N~sy"][0][0].split(",").map((tag: string, index: number) => (
          <span key={`${index}_${tag}`} className="capsule-label">
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 pt-4 pb-7 border-b border-gray-300">{blocks[0].value.properties.title}</h1>
      {blocks.length > 3 ? (
        <section className="py-4 flex flex-col gap-4 whitespace-pre-line">
          <Blocks blocks={blocks as unknown as notion.BlockMap[]} />
        </section>
      ) : (
        <p className="py-4 text-sm text-gray-500">아직 작성된 내용이 없습니다. 조금만 기다려 주세요!</p>
      )}
      {/* <NotionRenderer recordMap={data} fullPage={true} darkMode={false} rootPageId={params.pageid} previewImages /> */}
    </>
  );
}
