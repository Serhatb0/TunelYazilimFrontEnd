  
import http from "./httpCommon";


export default class AboutUsService{
    getAbout(){
        return http.get("/aboutUs/getAll")
    }
}