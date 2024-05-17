import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="container ">
      <div className="row mt-4 ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          height={500}
          effect="cube"
          grabCursor={true}
        >
          <SwiperSlide>
            <div
              className="d-flex flex-column gap-4 justify-content-center  align-items-center "
              style={{
                height: "470px",

                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('	https://yoldabiblog.com/wp-content/uploads/2024/05/Tiflis-gezi-rehberi-kapak-1200x739.jpg')",
              }}
            >
              <div className="d-flex  gap-4  ">
                <div className="custom-border fw-bold text-xs px-3 py-2">
                  BİRGİ
                </div>
                <div className="custom-border  fw-bold text-xs px-3 py-2 ">
                  İZMİR
                </div>
                <div className="custom-border fw-bold text-xs px-3 py-2">
                  TÜRKİYE
                </div>
              </div>
              <div className="text-white fw-bold text-center">
                <h2> TİFLİS GEZİ REHBERİ VE TİFLİS GEZİLECEK YERLER</h2>
              </div>
              <div
                className="text-white text-center "
                style={{ maxWidth: "700px" }}
              >
                Tiflis Gezi Rehberi ve Tiflis Gezilecek Yerler 2 yıl aradan
                sonra oğlumuzu ilk defa anneanne-babaanneye bırakıp 3 günlük bir
                kaçamak yapma şansımız çıkınca, inanın fazla düşünmedik. Soluğu
                Tiflis‘te aldık! Bu şehir …
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="d-flex flex-column gap-4 justify-content-center  align-items-center "
              style={{
                height: "470px",
                backgroundColor: "red",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://yoldabiblog.com/wp-content/uploads/2024/05/sidari-top-1-1280.jpg')",
              }}
            >
              <div className="d-flex  gap-4  ">
                <div className="custom-border bg-primary fw-bold text-xs px-3 py-2">
                  KORFU
                </div>
                <div className="custom-border bg-primary  fw-bold text-xs px-3 py-2 ">
                  YUNANİSTAN
                </div>
                <div className="custom-border bg-primary fw-bold text-xs px-3 py-2">
                  AVRUPA
                </div>
              </div>
              <div className="text-white fw-bold text-center">
                <h2> KORFU PİLAJLARI & KORFU'NUN EN GÜZEL SAHİLLERİ</h2>
              </div>
              <div
                className="text-white text-center "
                style={{ maxWidth: "700px" }}
              >
                Korfu Plajları, Korfu’nun En Güzel Sahilleri ve Korfu’nun Kum
                Plajları Bugün kapı komşularımız, ortak denizi paylaştığımız
                Yunan adalarından biraz daha farklı bir Yunan adasına hep
                birlikte konuk olalım…
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="d-flex flex-column gap-4 justify-content-center  align-items-center "
              style={{
                height: "470px",
                backgroundColor: "red",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('https://yoldabiblog.com/wp-content/uploads/2024/05/513613378.jpg')",
              }}
            >
              <div className="d-flex  gap-4  ">
                <div className="custom-border bg-primary fw-bold text-xs px-3 py-2">
                  AMSTERDAM
                </div>
                <div className="custom-border bg-primary fw-bold text-xs px-3 py-2 ">
                  HOLLANDA
                </div>
                <div className="custom-border bg-primary fw-bold text-xs px-3 py-2">
                  AVRUPA
                </div>
              </div>
              <div className="text-white fw-bold text-center ">
                <h2> AMSTERDAM KONAKLAMA REHBERİ:UCUZ KONAKLAMA </h2>
              </div>
              <div
                className="text-white text-center "
                style={{ maxWidth: "700px" }}
              >
                Amsterdam Konaklama Rehberi: Amsterdam’da Nerede Kalınır?
                Amsterdam’da Ucuz Konaklama Amsterdam, herkesin şehri. Mimari
                sevene mimari, eğlenmek isteyene gece hayatı..
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="d-flex flex-column gap-4 justify-content-center  align-items-center "
              style={{
                height: "470px",
                backgroundColor: "red",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundImage:
                  "url('	https://yoldabiblog.com/wp-content/uploads/2024/05/toskana-gezi-rehberi-kapak-1200x801.jpg')",
              }}
            >
              <div className="d-flex  gap-4  ">
                <div className="custom-border-green fw-bold text-xs px-3 text-white py-2">
                  TOSKANA
                </div>
                <div className="custom-border-green  fw-bold text-xs px-3 text-white py-2 ">
                  İTALYA
                </div>
                <div className="custom-border-green fw-bold text-xs px-3 text-white py-2">
                  AVRUPA
                </div>
              </div>
              <div className="text-white fw-bold text-center">
                <h2 className="">
                  TOSKANA GEZİ REHBERİ & TOSKANA KONAKLAMA REHBERİ
                </h2>
              </div>
              <div
                className="text-white text-center "
                style={{ maxWidth: "700px" }}
              >
                Tiflis Gezi Rehberi ve Tiflis Gezilecek Yerler 2 yıl aradan
                sonra oğlumuzu ilk defa anneanne-babaanneye bırakıp 3 günlük bir
                kaçamak yapma şansımız çıkınca, inanın fazla düşünmedik. Soluğu
                Tiflis‘te aldık! Bu şehir …
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-center gap-2">
          <h2 className="text-color">Hoşgeldiniz</h2>
          <p>
            <strong>Zento</strong>, seyahat tutkunu bir ekibin oluşturduğu bir
            gezi bloğudur. Amacımız, dünyanın dört bir yanındaki gezginlere
            ilham vermek ve seyahat deneyimlerinde rehberlik etmektir.
          </p>
          <p>
            Yolculuklarımızı paylaşarak, eşsiz deneyimler ve ipuçları sunuyoruz.
            Her yazımızda, seyahat deneyiminizi daha keyifli ve sorunsuz hale
            getirmek için bilgi ve öneriler sunuyoruz.
          </p>
          <p>
            Biz, <strong>Zento</strong> ekibi olarak, sizinle birlikte daha
            fazla keşif ve macera yaşamak için sabırsızlanıyoruz. Keyifli ve
            güvenli seyahatler dileriz!
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="home-img img"
            src="https://themes.estudiopatagon.com/wordpress/zento/wp-content/uploads/2024/03/about-2.webp"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
