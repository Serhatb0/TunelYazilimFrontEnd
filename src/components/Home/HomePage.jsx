/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { HomePageForm } from "./HomePageForm";
import "./HomePage.css";
import education1 from "../../img/1.jpg";
import { Carousel } from "react-responsive-carousel";
import education2 from "../../img/2.jpg";
function HomePage() {
 
  return (
    <div>
        <Carousel showThumbs={false} className="carousel-wrapper">
        <div>
          <img src={education1} />
        </div>
        <div>
          <img src={education2} />
        </div>
      </Carousel>
      <div
        className="d-flex h-100 flex-column
            justify-content-center align-items-center"
        style={{ margin: "2em 0em 0em 0em" }}
      >
        <h2>
          {" "}
          Tünel Yazılım Bilişim Sistemleri Uygulama ve Geliştirme Merkezi
        </h2>
        <h4>
          {" "}
          Web tasarım, uygulama ve tüm yazılım işlerinde % 100 Müşteri
          Memnuniyeti
        </h4>

        <div style={{ margin: "2em 0em 0em 0em" }} className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ height: "80%" }}
                src="https://www.tunelyazilim.com/site_document/kutuResim/icon_0N826312.jpg"
              ></img>
            </div>
            <div style={{ margin: "2em 0em 0em 0em" }} className="col-md-4">
              <h4>Son Teknoloji Yazılımlar | Adana Web Tasarım</h4>
              <p>
                Son teknoloji yazılımlar ve deneyimli kadromuzla, Adana başta
                olmak üzere Adana ilçeleri ve Türkiye genelinde siz değerli
                müşterilerimize web tasarım, yazılım, elektronik ve yazılım
                destek hizmetleri vermekteyiz. Profesyonel ekibimiz her projeyi
                özenle hazırlamaktadır. Bizler 15 yılı aşkın süredir yazılım
                konusunda hizmet veren kurumsal bir şirketiz. Adana Web Tasarım,
                Adana Özgün web tasarım, Adana Web tasarım Ajansı, Adana En iyi
                web tasarım ajansları, Adana Web Tasarım Örnekleri, Adana Web
                tasarım nasıl Yapılır, Adana Web tasarımı Nedir, Adana Web
                Tasarım Hizmetleri,
              </p>
            </div>
          </div>
        </div>

        <div
          className="d-flex h-100 flex-column
            justify-content-center align-items-center"
          style={{ margin: "2em 0em 0em 0em" }}
        >
          <h2> Neden Bizi Tercih Etmelisiniz?</h2>
        </div>
        <div className="box">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="box-part text-center">
                  {" "}
                  <i
                    className="  bi bi-suit-heart-fill fa-4x"
                    aria-hidden="true"
                  />
                  <div className="title">
                    <h3>%100 MÜŞTERİ MEMNUNİYETİ</h3>
                  </div>
                  <div className="text">
                    {" "}
                    <span>
                      Bizim müşterilerimizin memnuniyeti önemlidir
                      prensipleri ilk sırada görüyoruz.
                    </span>{" "}
                  </div>{" "}
                  <a href="#">Daha Fazla</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="box-part text-center">
                  {" "}
                  <i className="bi bi-sliders fa-4x" aria-hidden="true" />
                  <div className="title">
                    <h3>KALİTE ve GÜVEN</h3>
                  </div>
                  <div className="text">
                    {" "}
                    <span>
                      Bir hizmette kalite ve güven çok önemlidir. Biz bu önemli
                      prensipleri ilk sırada görüyoruz.
                    </span>{" "}
                  </div>{" "}
                  <a href="#">Daha Fazla</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="box-part text-center">
                  {" "}
                  <i className="bi bi-window-sidebar fa-4x" aria-hidden="true" />
                  <div className="title">
                    <h3>TASARIM ve YAZILIM</h3>
                  </div>
                  <div className="text">
                    {" "}
                    <span>
                      Bir hizmette olması gereken en güncel tasarım ve
                      yazılımları kullanıyoruz.
                    </span>{" "}
                  </div>{" "}
                  <a href="#">Daha Fazla</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        style={{ margin: "2em 0em 0em 0em" }}
        className="dark-bg"
        id="hero"
      >
        <div className="container">
          <div
            className="d-flex h-100 flex-column text-light
            justify-content-center"
          >
            <h1 className="text-center">KALİTELİ ve GÜVENİLİR HİZMET</h1>
            <p className="lead text-center">
              Kaliteli ve güvenli hizmetlerimizden yararlanmak, merak ettiğiniz
              tüm soruların cevaplarını bulmak için bize ulaşın.
              <h2>0 850 885 4 456</h2>
            </p>
          </div>
        </div>
        <div className="container">
          <h1 className="d-flex  flex-column text-light
            justify-content-center text-white align-items-center" >
            Online Sipariş
          </h1>
          <div className="row">
            <div className="col-8">
              <HomePageForm></HomePageForm>
            </div>
            <div className="col-4">
              <img
                style={{ height: "60%", width: "60%" }}
                src="https://www.tunelyazilim.com/site_document/files/resim/yazilimjpg_32718.jpg"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section style={{ margin: "2em 0em 0em 0em" }}>
          <h2 className="text-center ">Referanslarımız</h2>
        <div className="container">
          <div className="row ">
            <div className="col">
              <Carousel  infiniteLoop={true} showThumbs={false} className="carousel-wrapper pt-3 homepagecarousel1" id="homepagecarousel">
                <div >
                  <img style={{ height: "150px"}} src={education1} />
                </div>
                <div >
                  <img style={{ height: "150px"}} src={education2} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: "2em 0em 0em 0em" }}>
          <h2 className="text-center ">Müşteri Görüşleri</h2>
        <div className="container">
          <div className="row ">
            <div className="col">
              <Carousel  infiniteLoop={true} showThumbs={false} className="carousel-wrapper pt-3 homepagecarousel2">
                <div style={{ height: "100px"}}>
                  <p style={{ height: "100px"}}  >Web Tasarım
                  hizmetinizden Cok Memnun Kaldık Çok teşekkür ederiz
                  Tünel Yazılım..
                  </p>
                  <b>Ahmet.k</b>
                </div>
                <div style={{ height: "100px"}}>
                  <p style={{ height: "100px"}}  >Web Tasarım
                  hizmetinizden Cok Memnun Kaldık Çok teşekkür ederiz
                  Tünel Yazılım..
                  </p>
                  <b>Ahmet.k</b>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}

export default HomePage;
