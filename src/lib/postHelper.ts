import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostsApiResponse = {
  title: string;
  slug: string;
  meta: string;
}[];

export const readPostsContent = (): PostsApiResponse => {
  const dirs = fs.readdirSync(path.join(process.cwd(), "src/posts"));
  const data = dirs.map((filename) => {
    const fContent = fs.readFileSync(
      path.join(process.cwd(), "src/posts/" + filename),
      { encoding: "utf-8" }
    );
    return matter(fContent).data;
  });

  return data as PostsApiResponse;
};
