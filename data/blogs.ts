import type { BlogPost } from "../interfaces/Interfaces";
import snapshot from "./blogs.json";

/**
 * The Writing section is curated, not a feed.
 *
 * Reading dev.to's API live was tried and reverted: it drags in boosts,
 * reposts and anything else published since, and the section only has room for
 * three. These are chosen by hand — edit the list to change what the site
 * shows, in this order.
 */
const featured = [
  "its-never-late-to-write-tests-4o8c",
  "optimizing-tailwind-css-for-react-applications-our-journey-2lck",
  "a-letter-to-jobseekers-dont-give-up-2jim",
] as const;

const bySlug = new Map(snapshot.map((post) => [post.slug, post]));

export const posts: BlogPost[] = featured.map((slug) => {
  const post = bySlug.get(slug);

  // A typo in the list above would otherwise render an empty card and nothing
  // else; failing the build is the cheaper way to find out.
  if (!post) throw new Error(`data/blogs.json has no post with slug "${slug}"`);

  return {
    id: post.id,
    title: post.title,
    description: post.description,
    url: post.url,
    coverImage: post.cover_image,
    publishedAt: post.published_at,
  };
});
