import Image from "next/image";
import { useEffect, useState } from "react";
import formatDate from "../Functions/formatDate";
import { Blog } from "../Interfaces/Interfaces";

const Blog = () => {
  const [posts, SetPosts] = useState<Blog[]>();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      "https://dev.to/api/articles/latest?username=westernal&per_page=3",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let result = response.filter(() => {
          return;
        });
        SetPosts(response);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="blog reveal" id="blog">
      <h2>Blog</h2>
      <section className="blog-list">
        {posts &&
          posts.map((post) => {
            return (
              <a href={post.url} key={post.id}>
                <article className="blog-item">
                  <div className="flex blog-image">
                    <Image
                      width={300}
                      height={120}
                      src={post.cover_image}
                      alt="post image"
                      id="post-image"
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
          Read More
        </a>
      </div>
    </section>
  );
};

export default Blog;
