import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="blog" id="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {posts &&
          posts.map((post) => {
            return (
              <a href={post.url} key={post.id}>
                <div className="blog-item">
                  <div className="flex">
                    <Image
                      width={400}
                      height={150}
                      src={post.cover_image}
                      alt="post image"
                      id="post-image"
                    />
                  </div>
                  <div className="blog-avatar pl-10">
                    <Image
                      width={40}
                      height={40}
                      src={post.user.profile_image}
                      alt="avatar"
                      id="avatar"
                    />
                    <p> Ali Navidi</p>
                  </div>
                  <h3 className="pl-10">{post.title}</h3>
                </div>
              </a>
            );
          })}
      </div>
      <div className="flex blog-more">
        <a href="https://dev.to/westernal">Read More</a>
      </div>
    </div>
  );
};

export default Blog;
