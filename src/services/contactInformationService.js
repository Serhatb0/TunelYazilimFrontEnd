  
import http from "./httpCommon";


export default class ContactInformationService{
    getInformation(){
        return http.get("/contactInformation/getAll")
    }

    getInformationById(id){
        return http.get(`/contactInformation/getAllById?id=${id}`)
    }

    update(id,values){
        return http.put(`/contactInformation/update?id=${id}`,values)
    }

    delete(id){
        return http.delete(`/contactInformation/delete?id=${id}`)
    }


    add(values){
        return http.post("/contactInformation/add",values);
    }
}