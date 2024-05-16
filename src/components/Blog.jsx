import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ id, title, date, thumbnail, summary }) => {
  return (
    <div key={id} className=" col-12 col-md-3 my-4 blog-post ">
      <Link
        className="card bg-white link-card text-decoration-none  "
        to={`/blog/${id}`}
      >
        <img
          src={thumbnail}
          className="card-img-top "
          alt="Placeholder"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body link-card">
          <h6 className="card-title">{title}</h6>
          <p className="text-xs">{date}</p>
          <p className="card-text fst-italic truncate ellipsis custom-ellipsis">
            {summary}
          </p>
          <Link
            to={`/blog/${id}`}
            className="btn btn-outline-primary btn-hover  btn-sm  "
          >
            Devamını oku..
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
