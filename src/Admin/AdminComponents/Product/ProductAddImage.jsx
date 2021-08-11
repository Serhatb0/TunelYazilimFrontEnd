/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Image, Message, Modal } from "semantic-ui-react";
import UploadService from "../../../services/uploadFilesService";
function ProductAddImage({  id, setAddImageOpen, addImageOpen }) {
  const [selectedFiles, setSelectedFiles] = useState();
  const [currentFile, setCurrentFile] = useState();
  const [ımageProductId, setImageProductId] = useState([]);
  const [snipper, setsnipper] = useState(true)
    const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (id === undefined ) {
    } else {
      setsnipper(true)
      setImageProductId([])
      setTimeout(() => {
        setsnipper(false)
        UploadService.getFilesProductId(id).then((result) =>
        setImageProductId(result.data.data)
        );
    
      }, 3000);
       
     
    }
  }, [id]);
  const selectFile = (event) => {
    setSelectedFiles({
      selectedFiles: event.target.files,
    });
  };

  const upload = () => {
    let currentFile = selectedFiles.selectedFiles[0];

    setCurrentFile({
      currentFile: currentFile,
    });

    UploadService.uploadProduct(id,currentFile, (event) => {
        setProgress({
          progress: Math.round((100 * event.loaded) / event.total),
        });
      })

  

    setSelectedFiles({
      selectedFiles: undefined,
    });
  };
  return (
    <Modal
      dimmer={"blurring"}
      centered={true}
      size={"mini"}
      style={{
        height: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto",
      }}
      onClose={() => setAddImageOpen(false)}
      onOpen={() => setAddImageOpen(true)}
      open={addImageOpen}
    >
      <Modal.Header>Ürunlere Resim Ekle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div>
          {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress.progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress.progress + "%" }}
            >
              {progress.progress}%
            </div>
          </div>
        )}
            {ımageProductId.length !== 0 || snipper? (
              
              <Message color="red">
                {ımageProductId.length !== 0 ?(
                  <div> Sadece Bir Resim Ekliyebilirsiniz<br/>
                  Yeni Resim Eklemk İçin Diğer Resmi Silin</div>
                ):(<div>Lutfen Bekleyin...</div>)}
             
              
            </Message>
             
            ) : (
              <label className="btn btn-default">
              <input type="file" onChange={selectFile} />
              <icon className="bi bi-cloud-arrow-up-fill fa-4x"></icon>
            </label>
            )}
            {ımageProductId.length !== 0 || snipper?null: (     <a
              onClick={()=>{
                setTimeout(() => {
                    window.location.reload(); 
                }, 1500);
              }}
            >
            
              <button
                className="btn btn-success"
                disabled={!selectedFiles}
                onClick={upload}
              >
                Yükle
              </button>
            </a>)}
       

            <div className="card">
              <div className="card-header">Ürüne Ait Resim</div>
              {snipper?<div className="spinner-border text-success" role="status">
  <span className="visually-hidden"></span>
</div>:null}
              <ul className="list-group list-group-flush">
                {ımageProductId &&
                  ımageProductId.map((image) => (
                    

                    <li className="list-group-item" key={image.id}>
                      {" "}
                      <Image
                        src={image.photoUrl}
                        circular
                        style={{ float: "left", width: "5em", height: "5em" }}
                      />
                      <a
                        href="#deleteEmployeeModal"
                        className="delete d-flex flex-column align-items-end"
                        data-toggle="modal"
                        style={{ margin: "8% 0% 0% 0%" }}
                        onClick={() => window.location.reload()}
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                          onClick={() => UploadService.delete(image.id)}
                        >
                          
                        </i>
                      </a>
                      <hr style={{ marginTop: "13%" }} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <Modal.Actions >
            <Button color="black" onClick={() => setAddImageOpen(false)}>
              İptal
            </Button>
          </Modal.Actions>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default ProductAddImage;
