/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import ReferencesService from "../../services/referencesService";
import UploadFilesService from "../../services/uploadFilesService";

import "./References.css";
function References() {
  const [references, setReferences] = useState([]);
  const [referencesId, setReferencesId] = useState();
  const [activeIndex, setActiveIndex] = useState({ activeIndex: 0 });
  const [id, setId] = useState();
  const referencesService = new ReferencesService();
  const [referencesImage, setReferencesImage] = useState([]);
  useEffect(() => {
    referencesService
      .getReferencesAll()
      .then((result) => setReferences(result.data.data));
  }, []);
  useEffect(() => {
    if (id === undefined) {
    } else {
      UploadFilesService.getFilesReferencesId(id).then((result) =>
        setReferencesImage(result.data.data)
      );

      referencesService
        .getReferencesById(id)
        .then((result) => setReferencesId(result.data.data));
    }
  }, [id]);
  console.log(references);


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
            <h1 className="text-center">Referanslar</h1>
          </div>
        </div>
      </section>
      <section id="latest" style={{ margin: "2em 0em 2em 0em" }}>
        <div className="container">
          <div className="accordion" id="accordionExample">
            <div className="row ">
              {references.map((ref) => (
                <div className="col-4" key={ref.id} style={{ margin: "2em 0em 0em 0em" }}>
                    
                  <div className="latest-item ">
                  <div
                    onClick={() => setId(ref.id)}
                    id={ref.referencesName.replace(" ", "")}
                     className="references"
                  >
                    <button
                    
                      type="button"
                      data-toggle="collapse"
                      data-target={`#${ref.referencesName.replace(" ", "")}`}
                      aria-expanded="true"
                      aria-controls={ref.referencesName.replace(" ", "")}
                      className="btn btn-primary p-0 rounded-0 border-0"
                    >
                      {ref?.photos.map((pho)=>(
                         <img
                        className="img-fluid"
                        src={pho.photoUrl}
                      />
                      ))}
                          
                    
                      <div className="overlay d-flex flex-column  align-items-center justify-content-center">
                        <i class="bi bi-chevron-double-down"></i>
                      </div>
                    </button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {references.map((ref) => (
                <div
                  id={ref.referencesName.replace(" ", "")}
                  className="collapse "
                  aria-labelledby={ref.referencesName.replace(" ", "")}
                  data-parent="#accordionExample"
                >
                  <div className="card card-body">
                    <div className="container-fluid mt-5 p-0">
                      <div className="row p-0 shadow ">
                        <div className="col-sm-6 col-xl-3 p-0">
                        <dl className="col-12">
                               <span className="text-danger lead">{ref.referencesName}</span>
                             </dl>
                            <p>{ref.referencesDescription}</p>
                            <a target="_blank" href={ref.referencesLink}>Buraya Tılayın</a>
                        </div>
   {referencesImage.map((ref)=>(
                         <div className={referencesId?.photos.length ===0? "":"col-sm-6 col-xl-3 p-0"} >

                               <Image
                               style={{height:"12em"}}
                               size="large"
                                 src={ref.photoUrl}
                                 
                               />
                             </div>

                           ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        
          </div>
        </div>
      </section>
    </div>
  );
}

export default References;
