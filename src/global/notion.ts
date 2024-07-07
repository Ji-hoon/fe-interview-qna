import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";
import { cache } from "react";
import { PageType } from "@/global/types";

export const notion = new NotionAPI();

export async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}

export const notionDatabase = new Client({
  auth: process.env.NOTION_API_SECRET,
});

export const getPageData = cache(async () => {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error("데이터베이스 아이디가 없습니다.");
  }
  const db = await notionDatabase.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const pages = db.results as unknown as PageType[];

  console.log(pages);
  return pages;
});
