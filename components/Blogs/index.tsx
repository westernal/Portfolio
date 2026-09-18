import Image from "next/image";
import formatDate from "../../functions/formatDate";
import Heading from "../shared/Heading";
import Reveal from "../shared/Reveal";
import { profile } from "../../data/profile";
import { posts } from "../../data/blogs";

const Blog = () => {
  return (
    <section className="section blog" id="blogs">
      <Heading
        text="Writing"
        eyebrow="What I've learned"
        lead="Notes on frontend work — performance, tooling, and the occasional opinion."
      />

      {/* Exactly the three picked in data/blogs.ts; the rest live behind the
          CTA below. */}
      <div className="blog-list">
        {posts.map((post, index) => (
          <Reveal
            as="a"
            delay={Math.min(index, 3) * 80}
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noreferrer"
            className="blog-card"
            data-track="blog_post_opened"
          >
            {post.coverImage && (
              <div className="blog-image">
                <Image
                  fill
                  src={post.coverImage}
                  alt=""
                  sizes="(max-width: 950px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}

            <div className="blog-info">
              <p className="blog-date">{formatDate(post.publishedAt)}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <span className="text-link blog-more">
                Read on dev.to<span aria-hidden="true"> ↗</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="section-cta">
        <a
          href={profile.links.devto}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
          data-track="devto_profile_opened"
        >
          All posts on dev.to<span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </section>
  );
};

export default Blog;
