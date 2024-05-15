import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ id, title, date, thumbnail }) => {
  return (
    <div key={id} className=" col-12 col-md-3 my-4">
      <div className="card">
        <img
          src={thumbnail}
          className="card-img-top "
          alt="Placeholder"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{date}</p>
          <Link to={`/blog/${id}`} className="btn btn-outline-primary btn-sm  ">
            Devamını oku..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
