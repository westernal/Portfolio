import Image from "next/image";
import { useEffect, useState } from "react";
import formatDate from "../Functions/formatDate";

const Blog = () => {
  const [posts, SetPosts] = useState([]);

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
                      width={430}
                      height={200}
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
                </article>
              </a>
            );
          })}
      </section>
      <div className="flex blog-more">
        <a href="https://dev.to/westernal">Read More</a>
      </div>
    </section>
  );
};

export default Blog;
