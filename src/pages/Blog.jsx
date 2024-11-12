import React, { useEffect, useState } from "react";
import p_img_5 from "../images/photo-gallery/practical-3.jpg";
import "../css/blog.css";
import { Link } from "react-router-dom";
import { BaseUrl, Loading } from "../components";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [topBlog, setTopBlog] = useState([]);

  const getBlog = async () => {
    const url = `${BaseUrl()}/blog_api/`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setBlog(response.reverse());
      const sortedPosts = response.sort((a, b) => b.like_count - a.like_count);
      const topThreePosts = sortedPosts.slice(0, 4);
      setTopBlog(topThreePosts);
    } else {
      const response = await request.json();
    }
  };

  useEffect(() => {
    getBlog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  function formatDate(originalDate) {
    const dateObj = new Date(originalDate);

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    const formattedDate = `${month} ${day}, ${year} at ${formattedHours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return formattedDate;
  }

  return (
    <div className="blog">
      <div className="blog-cover">
        {blog.length > 0 ? (
          <div
            className="blog-cover-frame-1 blog-relative"
            style={{
              backgroundImage: `url(${blog[0].image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="cover-blog-detail">
              <Link to={`/blogs/${blog[0].title.replaceAll(" ", "-")}`}>
                <h2>{blog[0].title}</h2>
              </Link>
              <div className="blog-details">
                <div className="blogger-name">
                  <i class="fas fa-user"></i>
                  <p>
                    {blog[0].member.first_name + " " + blog[0].member.last_name}
                  </p>
                </div>
                {/* <div className="blog-date">
                  <i class="fas fa-calendar"></i>
                  <p>{formatDate(blog[0].created_at)}</p>
                </div> */}
                <div className="blog-comment">
                  <i class="fas fa-comment"></i>
                  <p>{blog[0].comment_count} Comments</p>
                </div>
                <div className="blog-comment">
                  <i class="fas fa-thumbs-up"></i>
                  <p>{blog[0].like_count} Likes</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading-com">
            <Loading />
          </div>
        )}
        <div className="blog-cover-frame-2">
          {blog.length > 0 ? (
            blog.slice(1, 3).map((blogs) => (
              <div
                className="frame-2-child blog-relative"
                style={{
                  backgroundImage: `url(${blogs.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="cover-blog-detail">
                  <Link to={`/blogs/${blogs.title.replaceAll(" ", "-")}`}>
                    <h5>{blogs.title}</h5>
                  </Link>
                  <div className="blog-details">
                    <div className="blogger-name">
                      <i class="fas fa-user"></i>
                      <p>
                        {blogs.member.first_name + " " + blogs.member.last_name}
                      </p>
                    </div>
                    <div className="blog-comment">
                      <i class="fas fa-comment"></i>
                      <p>{blogs.comment_count} Comments</p>
                    </div>
                    <div className="blog-comment">
                      <i class="fas fa-thumbs-up"></i>
                      <p>{blogs.like_count} Likes</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="loading-com">
              <Loading />
            </div>
          )}
        </div>
      </div>
      <div className="notice-banner">
        <h4>
          <span>Breaking News:</span> AUTOMACOM, UNILAG opens membership
          registration form
        </h4>
      </div>
      <div className="other-blogs">
        <div className="latest-blog">
          <div className="other-blog-title">
            <h5>Latest News</h5>
          </div>
          <div className="latest-blog-posts">
            {blog.length > 0 ? (
              blog.slice(3).map((blogs) => (
                <div className="blog-post blog-margin">
                  <div className="blog-post-img">
                    <img src={blogs.image} alt="" />
                  </div>
                  <div className="blog-post-detail">
                    <Link to={`/blogs/${blogs.title.replaceAll(" ", "-")}`}>
                      <h5>{blogs.title}</h5>
                    </Link>
                    <div className="blog-details">
                      <div className="blogger-name">
                        <i class="fas fa-user"></i>
                        <p>
                          {blogs.member.first_name +
                            " " +
                            blogs.member.last_name}
                        </p>
                      </div>
                      <div className="blog-comment">
                        <i class="fas fa-comment"></i>
                        <p>{blogs.comment_count} Comments</p>
                      </div>
                      <div className="blog-comment">
                        <i class="fas fa-thumbs-up"></i>
                        <p>{blogs.like_count} Likes</p>
                      </div>
                    </div>
                    <p className="blog-post-description">
                      {blogs.description.substring(0, 150)} [...]
                    </p>
                    <div className="blog-details bottom-date">
                      <div className="blog-date">
                        <i class="fas fa-calendar"></i>
                        <p>{formatDate(blogs.created_at)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="loading-com">
                <Loading />
              </div>
            )}
          </div>
        </div>
        <div className="trending-blog">
          <div className="other-blog-title">
            <h5>Trending News</h5>
          </div>
          <div className="trending-blog-posts">
            {topBlog.length > 0 ? (
              <div className="blog-post blog-post-margin">
                <div className="blog-post-img">
                  <img src={topBlog[0].image} alt="" />
                </div>
                <div className="blog-post-detail">
                  <Link to={`/blogs/${topBlog[0].title.replaceAll(" ", "-")}`}>
                    <h5>{topBlog[0].title}</h5>
                  </Link>
                  <div className="blog-details">
                    <div className="blogger-name">
                      <i class="fas fa-user"></i>
                      <p>
                        {topBlog[0].member.first_name +
                          " " +
                          topBlog[0].member.last_name}
                      </p>
                    </div>
                    <div className="blog-comment">
                      <i class="fas fa-comment"></i>
                      <p>{topBlog[0].comment_count} Comments</p>
                    </div>
                    <div className="blog-comment">
                      <i class="fas fa-thumbs-up"></i>
                      <p>{topBlog[0].like_count} Likes</p>
                    </div>
                  </div>
                  <p className="blog-post-description">
                    {topBlog[0].description.substring(0, 400)} [...]
                  </p>
                  <div className="blog-details bottom-date">
                    <div className="blog-date">
                      <i class="fas fa-calendar"></i>
                      <p>{formatDate(topBlog[0].created_at)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loading-com">
                <Loading />
              </div>
            )}
            <div className="divide-line"></div>
            <div className="latest-posts">
              {topBlog.length > 0 ? (
                topBlog.slice(1, 4).map((blog) => (
                  <div>
                    <div className="blog-post">
                      <div className="blog-post-img">
                        <img src={blog.image} alt="" />
                      </div>
                      <div className="blog-post-detail">
                        <Link to={`/blogs/${blog.title.replaceAll(" ", "-")}`}>
                          <h5>{blog.title.substring(0, 50)} [...]</h5>
                        </Link>
                        <div className="blog-details">
                          <div className="blog-date">
                            <i class="fas fa-calendar"></i>
                            <p>{formatDate(blog.created_at)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divide-line"></div>
                  </div>
                ))
              ) : (
                <div className="loading-com">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
