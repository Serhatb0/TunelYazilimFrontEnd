import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import "./AboutUsPage.css";
import tunel from "../../image/indir.jpg";
import AboutUsService from "../../services/aboutUsService";
function AboutUsPage() {

  const [about, setAbout] = useState([]);
  useEffect(() => {
    const aboutUsService = new AboutUsService();

    aboutUsService.getAbout().then((result) => setAbout(result.data.data));
  }, []);
  return (
    <div>
      <section
        style={{ margin: "0em 0em 0em 0em" }}
        className="dark-bg"
        id="about"
      >
        <div className="container" style={{ height: "30vh" }}>
          <div
            className="d-flex h-100 flex-column text-light
            justify-content-center"
          >
            <h1 className="text-center">Hakkımızda</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row" style={{ margin: "2em 0em 2em 0em" }}>
          <div className="col-4">
            {about.map((abo)=>(
                <h3 key={abo.id}>
               {abo.aboutDescription}
              </h3>
            ))}
          
          </div>
          <div className="col-4">
            <Image
              src={tunel}
              size="medium"
              circular
            />
          </div>
          <div className="col-4">
            <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
              <div className="row d-flex justify-content-center px-3">
  
                <div className="card card-about " style={{borderRadius: "5rem" }}>
                  <h2 className="ml-auto mr-4 mt-3 mb-0">"Mardin</h2>
                  <p className="ml-auto mr-4 mb-0 med-font">Karlı</p>
                  <h1 className="ml-auto mr-4 large-font">-20°</h1>
                  <p className="time-font mb-0 ml-4 mt-auto">
                    08:30 <span className="sm-font">AM</span>
                  </p>
                  <p className="ml-4 mb-4">Çarşamba, 4 Ağustos 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
