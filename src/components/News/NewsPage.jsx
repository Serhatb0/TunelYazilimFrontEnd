import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import NewsService from "../../services/newsService";
function NewsPage() {

  const [news, setNews] = useState([]);
  useEffect(() => {
    const newsService = new NewsService();

    newsService.getNewsAll().then((result) => setNews(result.data.data));
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
            <h1 className="text-center">Habeler</h1>
          </div>
        </div>
      </section>
            <div className="container">
        <div className="row" style={{ margin: "2em 0em 1em 0em" }}>
          {news.map((news)=>(
               <div className="col-sm-4  ">
               <Card.Group>
                 <Card>
                   <Card.Content>
                     {news?.photos.map((pho)=>(
                        <Image
                       floated="right"
                       size="large"
                       src={pho.photoUrl}
                     />
                     ))}
                    
                     <Card.Header>{news.newsName}</Card.Header>
                     
                   </Card.Content>
                   <Card.Content extra>
                     <div className="ui two buttons">
                       <Button basic color="green" as={NavLink} to={`/news/${news.id}`}>
                        Daha Fazla
                       </Button>
                     </div>
                   </Card.Content>
                 </Card>
               </Card.Group>
             </div>
          ))}
       
         
          
        </div>
        </div>
        </div>
    )
}

export default NewsPage
