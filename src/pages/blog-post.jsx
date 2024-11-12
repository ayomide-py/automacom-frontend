import React, { useState, useEffect } from "react";
import "../css/blogpost.css";
import "../css/blog.css";
import { Btn } from "../components";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../components";
import formatDate from "../components/FormatDate";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { blog_title } = useParams();
  const [blog, setBlog] = useState({});
  const [topBlog, setTopBlog] = useState([]);
  const [typedComment, setTypedComment] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const visitor_id = window.localStorage.getItem("visitor_id");
  const [blogComment, setBlogComment] = useState([]);
  const [v_name, setV_name] = useState();
  const [v_email, setV_email] = useState();

  const getBlog = async () => {
    const url = `${BaseUrl()}/blog_api/?blog_title=${blog_title.replaceAll(
      "-",
      " "
    )}`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setBlog(response[0]);
    } else {
      const response = await request.json();
    }
  };

  const getTopBlog = async () => {
    const url = `${BaseUrl()}/blog_api/`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      const sortedPosts = response.sort((a, b) => b.like_count - a.like_count);
      const topThreePosts = sortedPosts.slice(0, 4);
      setTopBlog(topThreePosts);
    } else {
      const response = await request.json();
    }
  };

  useEffect(() => {
    getBlog();
    getTopBlog();
    getBlogComment();
    visitor_id ? getVisitor() : console.log();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog_title]);

  const handleLikeBtn = async (event) => {
    const url = `${BaseUrl()}/blog_likes/`;
    const request = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
      body: JSON.stringify({
        like_status: true,
        visitor_id: visitor_id,
        blog: blog_title.replaceAll("-", " "),
      }),
    });
    if (request.ok) {
      const response = await request.json();
      getBlog();
    }
  };

  const handleComment = async (event) => {
    event.preventDefault();
    const body = {
      visitor_id: visitor_id,
      blog: blog_title.replaceAll("-", " "),
      name: name,
      email: email,
      comment: typedComment,
    };
    const url = `${BaseUrl()}/blog_comment/`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = await request.json();
      setTypedComment("");
      getBlogComment();
      getBlog();
    }
  };

  const getBlogComment = async () => {
    const url = `${BaseUrl()}/blog_comment/?blog-title=${blog_title.replaceAll(
      "-",
      " "
    )}`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setBlogComment(response);
    } else {
      const response = await request.json();
    }
  };

  const getVisitor = async () => {
    const url = `${BaseUrl()}/visitor_api/?visitor_id=${visitor_id}`;
    const request = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
    });
    if (request.ok) {
      const response = await request.json();
      setV_name(response[0].name);
      setV_email(response[0].email);
    } else {
      const response = await request.json();
    }
  };

  return (
    <div className="blogpost">
      <div className="other-blogs">
        <div className="latest-blog">
          <div className="latest-blog-posts">
            {blog ? (
              <div className="blog-post blog-margin">
                <div className="blog-post-img blogpost-img">
                  <img src={blog.image} alt="" />
                </div>
                <div className="blog-post-detail blogpost-h5">
                  <h5>{blog.title}</h5>
                  <div className="blog-details">
                    <div className="blogger-name">
                      <i class="fas fa-user"></i>
                      <p>
                        {blog.member ? (
                          blog.member.first_name + " " + blog.member.last_name
                        ) : (
                          <></>
                        )}
                      </p>
                    </div>

                    <div className="blog-comment">
                      <i class="fas fa-comment"></i>
                      <p>{blog.comment_count} Comments</p>
                    </div>
                    <div className="blog-comment">
                      <i class="fas fa-thumbs-up"></i>
                      <p>{blog.like_count} Likes</p>
                    </div>
                  </div>
                  <p className="blog-post-description">{blog.description}</p>
                  <div className="blog-details">
                    <div className="blog-date">
                      <i class="fas fa-calendar"></i>
                      <p>{formatDate(blog.created_at)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="like-btn">
              <button onClick={handleLikeBtn}>Like Post</button>
            </div>
            <div className="blogpsost-divide-line"></div>
            <div className="blogpost-comment">
              <div className="comment-title">
                <h5>{blogComment.length} Comments</h5>
              </div>
              <div className="blog-list-comment">
                {blogComment.length > 0 ? (
                  blogComment.map((comment) => (
                    <div className="list-comment">
                      <div className="commenter-profile">
                        <h5>{comment.visitor.name}</h5>
                        <p>{formatDate(comment.created_at)}</p>
                      </div>
                      <div className="comment-text">
                        <p className="user-comment">{comment.comment}</p>
                      </div>
                      <div className="blogpsost-divide-line"></div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <>
              <div className="comment-form">
                <h4>Post Comment</h4>
                <form style={{ boxSizing: "border-box" }}>
                  <div className="form-inline">
                    <div className="form-group col-lg-6 col-md-12 name">
                      <input
                        id="name"
                        className="form-control"
                        type="text"
                        placeholder={v_name ? v_name : "Enter Full Name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group col-lg-6 col-md-12 email"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        width: "100%",
                        minHeight: "1px",
                        maxWidth: "50%",
                        flex: "0 0 auto",
                        flexFlow: "row wrap",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <input
                        id="email"
                        className="form-control"
                        type="email"
                        placeholder={v_email ? v_email : "Enter email address"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div
                    className="form-textarea"
                    style={{ boxSizing: "border-box", marginBottom: "1rem" }}
                  >
                    <textarea
                      className="form-control mb-10"
                      name="message"
                      required
                      rows={5}
                      placeholder="Messege"
                      value={typedComment}
                      onChange={(e) => setTypedComment(e.target.value)}
                    />
                  </div>
                  <div className="blog-comment-btn" onClick={handleComment}>
                    <Btn content={"Post Comment"}></Btn>
                  </div>
                </form>
              </div>
            </>
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
              <></>
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
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
