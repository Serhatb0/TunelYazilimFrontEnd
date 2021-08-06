


import http from "./httpCommon";


export default class ReferencesService{
    getReferences(){
        return http.get("/references/getAll")
    }

    getReferencesById(id){
        return http.get(`/references/getAllById?id=${id}`)
    }
    add(values){
        return http.post(`/references/add`,values)
    }

    update(id,values){
        return http.put(`/references/update?id=${id}`,values)
    }
    
    delete(id){
        return http.delete(`/references/delete?id=${id}`)
    }
}