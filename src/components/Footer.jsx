import React from "react";
import { Link } from "react-router-dom";
import XIcon from "../icons/XIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import GithubIcon from "../icons/GithubIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const Footer = () => {
  return (
    <div className="container d-flex justify-content-center bg- ">
      <div className=" col-12 col-md-4 d-flex gap-5">
        <div className=" d-flex gap-4 flex-column   ">
          <Link className="text-dark align-items-center text-decoration-none d-flex">
            <span>
              Follow on <span className="fw-bold mx-1">Twitter</span>{" "}
            </span>
          </Link>
          <Link className="text-dark align-items-center text-decoration-none ">
            Follow on <span className="fw-bold mx-1">Facebook</span>
          </Link>
          <Link className="text-dark align-items-center text-decoration-none ">
            Follow on <span className="fw-bold mx-1">Instagram</span>
          </Link>
          <Link className="text-dark align-items-center text-decoration-none ">
            Follow on <span className="fw-bold mx-1">Github</span>
          </Link>
          <Link className="text-dark align-items-center text-decoration-none ">
            Follow on <span className="fw-bold mx-1">WhatsApp</span>
          </Link>
        </div>
        <div className=" d-flex flex-column gap-4  ">
          <Link>
            <XIcon />
          </Link>
          <Link>
            <FacebookIcon />
          </Link>
          <Link>
            <InstagramIcon />
          </Link>
          <Link>
            <GithubIcon />
          </Link>
          <Link>
            <WhatsAppIcon />
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-3  d-flex  flex-column gap-4">
        <div className="fw-bold">Kurumsal</div>
        <div className="gap-3 d-flex flex-column">
          <div>About Us</div>
          <div>Home</div>
          <div>Contact</div>
          <div>Privacy Policy</div>
          <div>Blog</div>
        </div>
      </div>
      <div className="col-12 col-md-5 gap-4 d-flex flex-column ">
        <div className="row">
          <img
            src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/logo-zento-1.png"
            className="col-md-4 col-4"
            alt="Zento"
          />
        </div>
        <div>
          Subscribe to our email newsletter and unlock access to{" "}
          <span className="fw-bold">members-only</span> content and{" "}
          <span className="fw-bold">exclusive updates.</span>
        </div>
        <div className="fw-bold">Let's Connect</div>
        <div>
          {" "}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                style={{ height: "42px" }}
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;