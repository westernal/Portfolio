import Image from "next/image";
import { useEffect, useState } from "react";
import formatDate from "../Functions/formatDate";
import { Blog } from "../Interfaces/Interfaces";

const Blog = ({ posts }: { posts: Blog[] }) => {
  useEffect(() => {}, []);
  return (
    <section className="blog" id="blog">
      <h2>Blog</h2>
      <section className="blog-list">
        {posts &&
          posts.map((post) => {
            return (
              <a href={post.url} key={post.id} className="reveal right-reveal">
                <article className="blog-item ">
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
          More Blogs
        </a>
      </div>
    </section>
  );
};

export default Blog;
