import React from "react";
import { Link } from "react-router-dom";
import XIcon from "../icons/XIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import GithubIcon from "../icons/GithubIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const Footer = () => {
  return (
    <div className="bg-light py-5 mt-5 ">
      <div className="container  ">
        <div className="row">
          {" "}
          <div className=" col-12 col-md-3 d-flex gap-5">
            <div className=" d-flex gap-3 flex-column  justify-content-center ">
              <Link
                to="https://twitter.com"
                className="text-dark align-items-center text-decoration-none d-flex fw-bold mx-1"
              >
                Twitter
              </Link>
              <Link
                to="https://facebook.com"
                className="text-dark align-items-center text-decoration-none fw-bold mx-1 "
              >
                Facebook
              </Link>
              <Link
                to="https://instagram.com"
                className="text-dark align-items-center text-decoration-none fw-bold mx-1"
              >
                Instagram
              </Link>
              <Link
                to="https://github.com"
                className="text-dark align-items-center text-decoration-none fw-bold mx-1"
              >
                Github
              </Link>
              <Link
                to="https://wa.me"
                className="text-dark align-items-center text-decoration-none fw-bold mx-1 "
              >
                WhatsApp
              </Link>
            </div>
            <div className=" d-flex flex-column gap-3 justify-content-center  ">
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
          <div className="col-12 col-md-3  d-flex  flex-column gap-4 justify-content-center">
            <div className="fw-bold">KURUMSAL</div>
            <div className="gap-2 d-flex flex-column">
              <div>Hakkımızda </div>
              <div>Anasayfa</div>
              <div>İletişim</div>
              <div>Gizlilik İlkelerimiz</div>
              <div>Blog</div>
            </div>
          </div>
          <div className="col-12 col-md-6 gap-4 d-flex flex-column ">
            <div className="row">
              <img
                src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/logo-zento-1.png"
                className="col-md-4 col-4"
                alt="Zento"
              />
            </div>
            <div>
              E-posta bültenimize abone olun ve yalnızca{" "}
              <span className="fw-bold">üyelere özel</span> içeriklere ve{" "}
              <span className="fw-bold">özel güncellemelere</span> erişim
              sağlayın.
            </div>
            <div className="fw-bold">İletişime Geçelim</div>
            <div>
              {" "}
              <div className="input-group mb-1 col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-primary rounded"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
