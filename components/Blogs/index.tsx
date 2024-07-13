import Image from "next/image";
import formatDate from "../../functions/formatDate";
import posts from "../../data/blogs.json" assert { type: "json" };
import Heading from "../shared/Heading";

const Blog = () => {
  return (
    <section className="blog" id="blogs">
      <Heading text="Blogs" />
      <section className="blog-list">
        {posts &&
          posts.map((post) => {
            return (
              <a
                href={post.url}
                key={post.id}
                className="reveal left-reveal"
                target="_blank"
                rel="noreferrer"
              >
                <article className="blog-item ">
                  <div className="flex blog-image">
                    <Image
                      fill
                      src={post.cover_image}
                      alt="post image"
                      id="post-image"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="blog-avatar ">
                    <Image
                      width={40}
                      height={40}
                      src={post.user.profile_image}
                      alt="avatar"
                      id="avatar"
                    />
                    <p> Ali Navidi</p>
                  </div>
                  <p id="blog-date">{formatDate(post.published_at)}</p>
                  <strong id="blog-title">{post.title}</strong>
                  <p id="blog-description">{post.description}</p>
                </article>
              </a>
            );
          })}
      </section>
      <div className="flex ">
        <a href="https://dev.to/westernal" className="btn from-top more-button">
          More Blogs
        </a>
      </div>
    </section>
  );
};

export default Blog;
