import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ id, title, date, thumbnail, summary }) => {
  const style = {
    maxHeight: "calc(1.2em * 5)",
    overflow: "hidden",
  };
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
          <p className="text-xs">{date}</p>
          <p className="card-text fst-italic truncate" style={style}>
            {summary}
          </p>
          <Link to={`/blog/${id}`} className="btn btn-outline-primary btn-sm  ">
            Devamını oku..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
