import { Client } from "@notionhq/client";

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

const getPost = async () => {
  console.log(import.meta.env.VITE_NOTION_API_KEY);
  const pageId = "15dc7960d65047ddb0e58e058c5c2951";
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);
};

export default getPost;
