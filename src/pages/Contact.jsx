import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-md-6 col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d391741.06959550735!2d32.743772!3d39.90833800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3470415536157%3A0x1f8524a5083df8a1!2sFuture%20Code!5e0!3m2!1str!2sus!4v1715804173495!5m2!1str!2sus"
            height={500}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-6 col-12">
          <div className="d-flex flex-column gap-3">
            <span className="text-gray fw-bold">İletişim</span>
            <h1 className="fw-bold">İletişime Geç</h1>
            <p className="text-gray">
              İşinizi büyütmek ve çözüm odaklı destek almak için buradayız.
              Hemen bizimle iletişime geçin!
            </p>
            <input type="text" className="custom-input" placeholder="İsminiz" />
            <input
              type="text"
              className="custom-input "
              placeholder="E-mail adresinizi girin"
            />
            <textarea className="message-input" placeholder="Mesaj" />
            <button type="submit" className="submit text-l ">
              Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
