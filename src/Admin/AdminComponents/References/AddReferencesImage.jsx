import React, { useEffect, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import UploadService from "../../../services/uploadFilesService";
function AddReferencesImage({ setAddImageOpen, addImageOpen }) {
  const [selectedFiles, setSelectedFiles] = useState();
  const [currentFile, setCurrentFile] = useState();

  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const [fileInfos, setFileInfos] = useState([]);



  const selectFile =(event) =>{
    setSelectedFiles({
      selectedFiles: event.target.files,
    });
  }

  const upload =()=> {
    let currentFile = selectedFiles.selectedFiles[0];

    setProgress({
        progress: 0
    })
    setCurrentFile({
   
      currentFile: currentFile,
    });

    // UploadService.upload(currentFile)
    UploadService.upload(currentFile, (event) => {
      setProgress({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
    //   .then((response) => {
    //     this.setState({
    //       message: response.data.message,
    //     });
    //     return UploadService.getFiles();
    //   })
   
    setSelectedFiles({
      "selectedFiles": undefined,
    });
    console.log("selectedFiles", selectedFiles);
    console.log("currentFile", currentFile);

    console.log("fileInfos", fileInfos);

  }
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
      <Modal.Header>Referans Ekle</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
        <div>
        {/* {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )} */}

        <label className="btn btn-default">
          <input type="file" onChange={selectFile} />
          <icon className="bi bi-cloud-arrow-up-fill"></icon>
        </label>

        <button className="btn btn-success"
          disabled={!selectedFiles}
          onClick={upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>
{/* 
        <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </div> */}
      </div>
          <Modal.Actions>
            <Button color="black" onClick={() => setAddImageOpen(false)}>
              İptal
            </Button>
            <Button
              content="Kaydet"
              labelPosition="right"
              icon="checkmark"
              type="submit"
              positive
            />
          </Modal.Actions>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default AddReferencesImage;
