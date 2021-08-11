  
import http from "./httpCommon";


export default class NewsService{
    getNewsAll(){
        return http.get(`/newsname/getAll`)
    }
    getNews(pageNo,pageSize){
        return http.get(`/newsname/findByactiveTrue?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    getNewsId(id){
        return http.get(`/newsname/getAllById?id=${id}`)
    }

    add(values){
        return http.post("/newsname/add",values);
    }

    
    delete(id){
        return http.post(`/newsname/rejectNews?id=${id}`);
    }

      
    update(id,values){
        return http.put(`/newsname/update?id=${id}`,values);
    }
}