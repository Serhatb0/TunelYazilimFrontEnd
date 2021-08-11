  
import http from "./httpCommon";


export default class AboutUsService{
    getAbout(){
        return http.get("/aboutUs/getAll")
    }


    getAboutById(id){
        return http.get(`/aboutUs/getAllById?id=${id}`)
    }

    update(id ,values){
        return http.put(`/aboutUs/update?id=${id}`,values)
   }
}