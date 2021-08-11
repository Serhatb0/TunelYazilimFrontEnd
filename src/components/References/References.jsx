/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState }   from "react";
import { Image } from "semantic-ui-react";
import ReferencesService from "../../services/referencesService";
import UploadFilesService from "../../services/uploadFilesService";

import "./References.css";
function References() {
  const [references, setReferences] = useState([]);
  const [referencesId, setReferencesId] = useState();

  const [id, setId] = useState()
  const referencesService = new ReferencesService();
  const [referencesImage, setReferencesImage] = useState([])
  useEffect(() => {

    referencesService.getReferencesAll().then((result) => setReferences(result.data.data));
   
  }, []);
  useEffect(() => {
    if(id === undefined){

    }else{
    UploadFilesService.getFilesReferencesId(id).then(result =>setReferencesImage(result.data.data))

    referencesService.getReferencesById(id).then((result) => setReferencesId(result.data.data));


    }
  }, [id])

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
      <section id="latest" style={{margin:"2em 0em 2em 0em"}} >
        
        <div className="container" >
        <div className="row " >

          {references.map((ref)=>(
                 <div key={ref.id}  className="col-4  "  style={{margin:"0em 0em 1em 0em"}}>
                         
                   <div   onClick={()=> setId(ref.id)} className="latest-item">
                     <button
                     
                       data-toggle="collapse"
                       data-target={`#${ref.referencesName.replace(' ','')}`}
                       aria-expanded="true"
                       aria-controls="collapseExample"
                       className="btn btn-primary p-0 rounded-0 border-0"
                       type="button"
                     >
                       <img
                         className="img-fluid"
                         src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                       />
                       <div className="overlay d-flex flex-column  align-items-center justify-content-center">
                         <i class="bi bi-chevron-double-down"></i>
                       </div>
                     </button>
                   </div>
                 </div>
                 
          ))}
               </div>
          <div className="row" >

               {references.map((ref)=>(
                   <div  key={ref.id} className="collapse" id={ref.referencesName.replace(' ','')}>
                   <div  className="card card-body" id="itemDteail1" >
                     <div className="container-fluid mt-5 p-0">
                       <div className="row p-0 shadow ">
                         <div className={referencesId?.photos.length ===0? "col-12 col-xl-12 ":"col-sm-6 col-xl-3 p-0"}>
                           
                           
                             <dl className="col-12">
                               <span className="text-danger lead">{ref.referencesName}</span>
                             </dl>
                            <p>{ref.referencesDescription}</p>
                            <a target="_blank" href={ref.referencesLink}>Buraya Tılayın</a>
                         </div>

                           {referencesImage.map((refImage)=>(
                         <div className={referencesId?.photos.length ===0? "":"col-sm-6 col-xl-3 p-0"} >

                               <Image
                               style={{height:"12em"}}
                               size="large"
                                 src={refImage.photoUrl}
                                 
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
      </section>
    </div>
  );
}

export default References;
