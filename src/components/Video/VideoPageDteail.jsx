/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Embed } from "semantic-ui-react";
import VideoService from "../../services/videoService";

function VideoPageDteail() {

  let { id } = useParams();
  const [videobyId, setVideobyId] = useState([]);
  useEffect(() => {
    const videoService = new VideoService();

    videoService.getvideoById(id).then((result) => setVideobyId(result.data.data));
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
            <h1 className="text-center">{videobyId.videoName}</h1>
            <h6 className="text-center">Videolar</h6>

          </div>
        </div>
      </section>
      <div className="container">
          <div className="row" style={{margin:"2em 0em 2em 0em"}}>
              <div className="col">
              <Embed
              
    id={videobyId.videoUrl}
    source='youtube'
  />
              </div>
          </div>
      </div>
    </div>
  );
}

export default VideoPageDteail;
