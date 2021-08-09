/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import VideoService from '../../../services/videoService';
import { Button, Form, Modal, Pagination, Table } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import BiricikTextInput from '../../../utilities/customFormControls/BiricikTextInput';
import { VideoAddForm } from './VideoAddForm';
function Video() {
    const [video, setVideo] = useState([]);
    const [id, setId] = useState();
    const [videoId, setVideoId] = useState([]);
    const [open, setOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
  
    const videoService = new VideoService();
  
    useEffect(() => {
        videoService
        .getvideo()
        .then((result) => setVideo(result.data.data));
    }, []);
  
    useEffect(() => {
        videoService
        .getvideoById(id)
        .then((result) => setVideoId(result.data.data));
    }, [id]);
  
    console.log(videoId);
    const VideoUpateForm = () => {
      const validationSchema = Yup.object({
        videoName: Yup.string().required("Zorunlu Alan"),
        videoUrl: Yup.string().required("Zorunlu Alan"),
      });
  
      const initialValues = {
        videoName: videoId.videoName,
        videoUrl: videoId.videoUrl,
  
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
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Header>Video Güncelle</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    videoService.update(id,values)
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                }}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <label>Video Adı</label>
  
                    <BiricikTextInput
                      name="videoName"
                      placeholder="Video Adı "
                    ></BiricikTextInput>
                    <label>Video Url</label>
  
                    <BiricikTextInput
                      name="videoUrl"
                      placeholder="Video Url"
                    ></BiricikTextInput>
                   
  
                    <Modal.Actions>
                      <Button color="black" onClick={() => setOpen(false)}>
                        İptal
                      </Button>
                      <Button
                        content="Güncelle"
                        labelPosition="right"
                        icon="checkmark"
                        type="submit"
                        positive
                      />
                    </Modal.Actions>
                  </Form>
                )}
              </Formik>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      );
    };
  
    return (
      <div>
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Video <b>Bilgileri</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={()=>setAddOpen(true)}
                  >
                    <i className="material-icons"></i>{" "}
                    <span>Yeni Video Ekle</span>
                  </a>
                </div>
              </div>
            </div>
            <Table unstackable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Video Adı</Table.HeaderCell>
                  <Table.HeaderCell>Video Url</Table.HeaderCell>
  
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
  
              <Table.Body>
                {video.map((vi) => (
                  <Table.Row key={vi.id}>
                    <Table.Cell>{vi.videoName}</Table.Cell>
                    <Table.Cell>{vi.videoUrl}</Table.Cell>
  
                    <Table.Cell>
                      <a
                        href="#editEmployeeModal"
                        className="edit"
                        onClick={() => setId(vi.id)}
                        data-toggle="modal"
                      >
                        <i
                          onClick={() => setOpen(true)}
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          
                        </i>
                      </a>
                      <a
                        onClick={() => setId(vi.id)}
  
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          
                        </i>
                      </a>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
  
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <Pagination></Pagination>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <VideoAddForm addOpen={addOpen} setAddOpen={setAddOpen}></VideoAddForm>
       
        {/* Edit Modal HTML */}
  
        <VideoUpateForm></VideoUpateForm>
        {/* Delete Modal HTML */}
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete Employee</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Silmek İstediginize Emin Misiniz</p>
                  <p className="text-warning">
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="İptal"
                  />
                    <Button
                    onClick={() => videoService.delete(id)}
                    inverted
                    color="green"
                  >
                    Sil
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Video
