import React, { useEffect, useState } from "react";
import AboutUsService from "../services/aboutUsService";

function Footer() {
  const [about, setabout] = useState([]);
  useEffect(() => {
    const aboutUsService = new AboutUsService();

    aboutUsService.getAbout().then((result) => setabout(result.data.data));
  }, []);
  return (
    <div>
      {/* CONTACT SECTİNON */}
      <section id="contact" className="generic dark-bg  ">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-white">Hakkımızda</h2>
              {about.map((ab) => (
                <p key={ab.id} className="text-white">{ab.aboutDescription}</p>
              ))}
            </div>
            <div className="col"></div>
            <div className="col">
              <table className="table border-0 d-flex h-100 flex-column justify-content-center">
                <tbody>
                  <tr>
                    <td colspan="7" className="align-middle">
                      <span className="text-light">
                        Karasoku Mahallesi 28026 Sokak Feyzullah Cemali İş Hanı
                        No:14/A Kat:2 No:208 01010 - Seyhan / ADANA
                      </span>
                    </td>
                    <th scope="row" className="text-danger lead text-center">
                      <i
                        style={{ fontSize: "2rem" }}
                        className="bi bi-geo-alt-fill"
                      ></i>
                    </th>
                  </tr>
                  <tr>
                    <td colspan="7" className="align-middle">
                      <span className="text-light">0555-455-4555</span>
                    </td>
                    <th scope="row" className="text-danger lead text-center">
                      <i
                        style={{ fontSize: "2rem" }}
                        className="bi bi-telephone-fill"
                      ></i>
                    </th>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <span className="text-light">
                        <i className="bi bi-facebook"></i>
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="text-light">
                        <i className="bi bi-twitter"></i>
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="text-light">
                        <i className="bi bi-youtube"></i>
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="text-light">
                        <i className="bi bi-linkedin"></i>
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="text-light">
                        <i className="bi bi-google"></i>
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="text-light">
                        <i className="bi bi-instagram"></i>
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="text-light">
                        <i className="bi bi-github"></i>
                      </span>
                    </td>
                    <th scope="row" className="text-danger lead text-center">
                      <i
                        style={{ fontSize: "2rem" }}
                        className="bi bi-telephone-fill"
                      ></i>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container-fluid bg-danger text-center py-4 lead text-light">
          NO &copy; 2021 SERHAT
        </div>
      </footer>
    </div>
  );
}

export default Footer;
