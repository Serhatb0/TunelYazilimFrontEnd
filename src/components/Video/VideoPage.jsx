import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import VideoService from "../../services/videoService";
function VideoPage() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const videoService = new VideoService();

    videoService.getvideo().then((result) => setVideo(result.data.data));
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
            <h1 className="text-center">Videolar</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card.Group style={{ margin: "2em 0em 0em 2em" }}>
              {video.map((vi) => (
                <Card key={vi.id}>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="large"
                      src="https://www.tunelyazilim.com/site_document/sayfa_img/JJZEZTPSY_resim_4_4_2020_8_s.jpg"
                    />
                    <Card.Header>{vi.videoName}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button
                        inverted
                        color="green"
                        as={NavLink}
                        to={`/video/${vi.id}`}
                      >
                        
                  Daha Fazla
                      </Button>

                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
