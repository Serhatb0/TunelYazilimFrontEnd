  
import http from "./httpCommon";


export default class ContactFormService{
    getContactForm(){
        return http.get("/contactForm/getAll")
    }

    add(values){
        return http.post("/contactForm/add",values);
    }

    delete(id){
        return http.delete(`/contactForm/delete?id=${id}`);
    }
}