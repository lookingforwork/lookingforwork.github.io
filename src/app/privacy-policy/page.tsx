import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import matter from "gray-matter";

async function getMarkdownContent() {
  const fileContent = fs.readFileSync(
    "./public/docs/PrivacyPolicy_1.0.md",
    "utf8"
  );

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  return processedContent.toString();
}

export default async function PrivacyPolicyPage() {
  const contentHtml = await getMarkdownContent();

  return (
    <main className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8">
      <div className="flex flex-col shrink text-blueside-dark p-6">
        <h2 className="text-3xl font-bold mb-6 mt-8">Privacy Policy</h2>
        <div className="" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </main>
  );
}
