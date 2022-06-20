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
                    {" "}
                    <img
                      src={post.cover_image}
                      alt="post image"
                      id="post-image"
                    />
                  </div>
                  <h3>{post.title}</h3>
                  <p> Ali Navidi</p>
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
