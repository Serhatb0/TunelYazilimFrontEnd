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
          <div className="col">
            {about.map((abo)=>(
                <h3 key={abo.id}>
               {abo.aboutDescription}
              </h3>
            ))}
          
          </div>
          <div className="col">
            <Image
              src={tunel}
              size="medium"
              circular
            />
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
