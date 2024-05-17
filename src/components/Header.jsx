import classNames from "classnames";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const divRef = useRef(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const clickEvent = (event) => {
      if (
        event.target.id != "menu-toggle" &&
        !divRef?.current.contains(event.target)
      ) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("click", clickEvent);
    return () => {
      window.removeEventListener("click", clickEvent);
    };
  }, []);

  return (
    <header className="d-flex align-items-center">
      <div className="container d-flex flex-row">
        <Link to={"/"}>
          <img
            src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/logo-zento-1.png"
            alt="Zento"
            width={150}
          />
        </Link>

        {/* mobile menu baslangic */}
        <div
          ref={divRef}
          className={classNames("mobile-menu", { "menu-open": showMobileMenu })}
        >
          <Link to={"/"}>
            <img
              src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/logo-zento-1.png"
              alt="Zento"
              width={150}
            />
          </Link>

          <ul className="navbar-nav gap-1 mt-3">
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                aria-current="page"
                to={"/"}
              >
                ANASAYFA
              </Link>
            </li>

            <li className="nav-item active ">
              <Link className="nav-link dropdown dropdown-toggle fw-semibold">
                KATEGORİLER
              </Link>
              <div className="mega-menu">
                <div className="d-flex gap-3 ">
                  <div className="col-md-3 col-2  d-flex flex-column">
                    <Link className="fw-bold text-decoration-none text-black mb-2">
                      TÜRKİYE
                    </Link>
                    <Link className="mb-1">Antalya</Link>
                    <Link className="mb-1">İstanbul</Link>
                    <Link className="mb-1">Erzurum</Link>
                    <Link className="mb-1">Konya</Link>
                    <Link className="mb-1">Ankara</Link>
                    <Link className="mb-1">Isparta</Link>
                    <Link className="mb-1">Muğla</Link>
                  </div>

                  <div className="col-md-3 col-2 d-flex flex-column">
                    <Link
                      to="#"
                      className="fw-bold text-decoration-none text-black mb-2"
                    >
                      ASYA
                    </Link>
                    <Link className="mb-1">Çin</Link>
                    <Link className="mb-1">Hindistan</Link>
                    <Link className="mb-1">Japonya</Link>
                    <Link className="mb-1">Güney Kore</Link>
                    <Link className="mb-1">Tayland</Link>
                    <Link className="mb-1">Endonezya</Link>
                  </div>
                  <div className="col-md-3 col-2 d-flex flex-column">
                    <Link
                      to="#"
                      className="fw-bold text-decoration-none text-black mb-2"
                    >
                      AVRUPA
                    </Link>
                    <Link className="mb-1">Danimarka</Link>
                    <Link className="mb-1">İsviçre</Link>
                    <Link className="mb-1">Avusturya</Link>
                    <Link className="mb-1">Portekiz</Link>
                    <Link className="mb-1">Yunanistan</Link>
                    <Link className="mb-1">Polonya</Link>
                    <Link className="mb-1">Çekya</Link>
                    <Link className="mb-1">Macaristan</Link>
                    <Link className="mb-1">Finlandiya</Link>
                  </div>
                  <div className="col-md-3 col-2  d-flex flex-column">
                    <Link
                      to="#"
                      className="fw-bold text-decoration-none text-black mb-2"
                    >
                      AFRİKA
                    </Link>
                    <Link className="mb-1">Mısır</Link>
                    <Link className="mb-1">Kenya</Link>
                    <Link className="mb-1">Etiyopya</Link>
                    <Link className="mb-1">Gana</Link>
                    <Link className="mb-1">Fas</Link>
                    <Link className="mb-1">Tunus</Link>
                    <Link className="mb-1">Angola</Link>
                    <Link className="mb-1">Mozambik</Link>
                    <Link className="mb-1">Zambiya</Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item nav-black">
              <Link
                className="nav-link fw-semibold dropdown dropdown-toggle"
                to={"/blog"}
              >
                BLOG
              </Link>
              <div className="xs-menu">
                <div className="justify-content-center align-items-center  ">
                  <div className="col-12 d-flex flex-column gap-2  ">
                    <Link className="fw-bold text-decoration-none text-black mb-2">
                      BLOGLARIM
                    </Link>
                    <Link className="mb-1 " to={"/blog/1"}>
                      Almanya'da Yaşamak
                    </Link>
                    <Link className="mb-1" to={"/blog/1"}>
                      Avrupa'da Yüksek Lisans
                    </Link>
                    <Link className="mb-1" to={"/blog/1"}>
                      Almanya'da Göç Yasası
                    </Link>
                    <Link className="mb-1" to={"/blog/1"}>
                      İngiltere Dil Okulları
                    </Link>
                    <Link className="mb-1" to={"/blog/1"}>
                      Almanya'da Çalışmak
                    </Link>
                    <Link className="mb-1" to={"/blog/1"}>
                      Almanya'ya Taşınmak
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold " to={"/contact"}>
                İLETİŞİM
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile menu son */}

        <nav
          className="navbar navbar-expand-lg navbar-light bg-body-tertiar"
          style={{ margin: "0 auto" }}
        >
          <button
            id="menu-toggle"
            className="navbar-toggler"
            type="button"
            onClick={() => setShowMobileMenu((pre) => !pre)}
          >
            <span id="menu-toggle" className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMegaMenu">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold"
                  aria-current="page"
                  to={"/"}
                >
                  ANASAYFA
                </Link>
              </li>

              <li className="nav-item active ">
                <Link className="nav-link dropdown dropdown-toggle fw-semibold">
                  KATEGORİLER
                </Link>
                <div className="mega-menu">
                  <div className="d-flex gap-3 ">
                    <div className="col-md-3 col-2  d-flex flex-column">
                      <Link className="fw-bold text-decoration-none text-black mb-2">
                        TÜRKİYE
                      </Link>
                      <Link className="mb-1">Antalya</Link>
                      <Link className="mb-1">İstanbul</Link>
                      <Link className="mb-1">Erzurum</Link>
                      <Link className="mb-1">Konya</Link>
                      <Link className="mb-1">Ankara</Link>
                      <Link className="mb-1">Isparta</Link>
                      <Link className="mb-1">Muğla</Link>
                    </div>

                    <div className="col-md-3 col-2 d-flex flex-column">
                      <Link
                        to="#"
                        className="fw-bold text-decoration-none text-black mb-2"
                      >
                        ASYA
                      </Link>
                      <Link className="mb-1">Çin</Link>
                      <Link className="mb-1">Hindistan</Link>
                      <Link className="mb-1">Japonya</Link>
                      <Link className="mb-1">Güney Kore</Link>
                      <Link className="mb-1">Tayland</Link>
                      <Link className="mb-1">Endonezya</Link>
                    </div>
                    <div className="col-md-3 col-2 d-flex flex-column">
                      <Link
                        to="#"
                        className="fw-bold text-decoration-none text-black mb-2"
                      >
                        AVRUPA
                      </Link>
                      <Link className="mb-1">Danimarka</Link>
                      <Link className="mb-1">İsviçre</Link>
                      <Link className="mb-1">Avusturya</Link>
                      <Link className="mb-1">Portekiz</Link>
                      <Link className="mb-1">Yunanistan</Link>
                      <Link className="mb-1">Polonya</Link>
                      <Link className="mb-1">Çekya</Link>
                      <Link className="mb-1">Macaristan</Link>
                      <Link className="mb-1">Finlandiya</Link>
                    </div>
                    <div className="col-md-3 col-2  d-flex flex-column">
                      <Link
                        to="#"
                        className="fw-bold text-decoration-none text-black mb-2"
                      >
                        AFRİKA
                      </Link>
                      <Link className="mb-1">Mısır</Link>
                      <Link className="mb-1">Kenya</Link>
                      <Link className="mb-1">Etiyopya</Link>
                      <Link className="mb-1">Gana</Link>
                      <Link className="mb-1">Fas</Link>
                      <Link className="mb-1">Tunus</Link>
                      <Link className="mb-1">Angola</Link>
                      <Link className="mb-1">Mozambik</Link>
                      <Link className="mb-1">Zambiya</Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item nav-black">
                <Link
                  className="nav-link fw-semibold dropdown dropdown-toggle"
                  to={"/blog"}
                >
                  BLOG
                </Link>
                <div className="xs-menu">
                  <div className="justify-content-center align-items-center  ">
                    <div className="col-12 d-flex flex-column gap-2  ">
                      <Link className="fw-bold text-decoration-none text-black mb-2">
                        BLOGLARIM
                      </Link>
                      <Link className="mb-1 " to={"/blog/1"}>
                        Almanya'da Yaşamak
                      </Link>
                      <Link className="mb-1" to={"/blog/1"}>
                        Avrupa'da Yüksek Lisans
                      </Link>
                      <Link className="mb-1" to={"/blog/1"}>
                        Almanya'da Göç Yasası
                      </Link>
                      <Link className="mb-1" to={"/blog/1"}>
                        İngiltere Dil Okulları
                      </Link>
                      <Link className="mb-1" to={"/blog/1"}>
                        Almanya'da Çalışmak
                      </Link>
                      <Link className="mb-1" to={"/blog/1"}>
                        Almanya'ya Taşınmak
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold " to={"/contact"}>
                  İLETİŞİM
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
