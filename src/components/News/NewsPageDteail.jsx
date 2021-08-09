/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NewsPageDteail.css";
import NewsService from "../../services/newsService";

function NewsPageDteail() {
  let { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const newsService = new NewsService();

    newsService.getNewsId(id).then((result) => setNews(result.data.data));
  }, []);
  return (
  
    <div>
      <section
        style={{ margin: "0em 0em 0em 0em" }}
        className="dark-bg-references"
        id="about"
      >
        <div className="container" style={{ height: "30vh" }}>
          <div
            className="d-flex h-100 flex-column text-light
            justify-content-center"
          >
            <h1 className="text-center">{news.newsName}</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col" style={{ margin: "2em 0em 0em 0em " }}>
            <strong>{news.newsName}</strong>
            <p style={{ margin: "2em 0em 0em 0em" }}>
             {news.newsDescription}
            </p>
            {/* <ul>
              <li>SSL Güvenlik sertifikasına sahip olmalı</li>
              <li>SSL Güvenlik sertifikasına sahip olmalı</li>
              <li>SSL Güvenlik sertifikasına sahip olmalı</li>
              <li>SSL Güvenlik sertifikasına sahip olmalı</li>
            </ul> */}
          </div>
          <div className="col">
            <img src="https://www.tunelyazilim.com/site_document/sayfa_img/BVDV10Y2B_resim_2_6_2019_23_s.jpg"></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <section
              class="content-item"
              id="comments"
              style={{ margin: "0em 0em 0em 0em" }}
            >
              <div class="container">
                <div class="row justify-content-center align-items-center">
                  <div class="col-sm-8">
                    <form>
                      <h3 class="pull-left">Yeni Yorum</h3>

                      <fieldset>
                        <div class="row">
                          <div class="col-sm-3 col-lg-2 hidden-xs">
                            <img
                              class="img-responsive"
                              src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
                              alt=""
                            />
                          </div>
                          <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                            <textarea
                              class="form-control"
                              id="message"
                              placeholder="Your message"
                              required=""
                            ></textarea>
                            <button
                              type="button"
                              class="btn btn-outline-success "
                            >
                              Gönder
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </form>

                    <h3>2 Yorum</h3>

                    <div class="media">
                      <a class="pull-left" href>
                        <img
                          class="media-object"
                          src="http://res.cloudinary.com/dmeviw9q7/image/upload/v1623523376/nkorft8y9lgudvrewdlp.jpg"
                          alt=""
                        />
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">Serhat Biricik</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                          <li>
                            <i class="fa fa-calendar"></i>27/02/2014
                          </li>
                          <li>
                            <i class="fa fa-thumbs-up"></i>13
                          </li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                          <li class="">
                            <a href="">Beğenme</a>
                          </li>
                          <li class="">
                            <a href="">Yanıt</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="media">
                      <a class="pull-left" href="#">
                        <img
                          class="media-object"
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt=""
                        />
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">Abdullah</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                          <li>
                            <i class="fa fa-calendar"></i>27/02/2014
                          </li>
                          <li>
                            <i class="fa fa-thumbs-up"></i>13
                          </li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                          <li class="">
                            <a href="">Beğenme</a>
                          </li>
                          <li class="">
                            <a href="">Yanıt</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPageDteail;
