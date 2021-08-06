  
import http from "./httpCommon";


export default class NewsService{
    getNews(){
        return http.get("newsname/getAll")
    }

    getNewsId(id){
        return http.get(`/newsname/getAllById?id=${id}`)
    }

    add(values){
        return http.post("/newsname/add",values);
    }

    
    delete(id){
        return http.delete(`/newsname/delete?id=${id}`);
    }

      
    update(id,values){
        return http.put(`/newsname/update?id=${id}`,values);
    }
}