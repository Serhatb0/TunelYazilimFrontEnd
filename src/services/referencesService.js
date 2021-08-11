


import http from "./httpCommon";


export default class ReferencesService{
    getReferencesAll(){
        return http.get(`/references/getAll`)
    }

    getReferences(pageNo,pageSize){
        return http.get(`/references/findByactiveTrue?pageNo=${pageNo}&pageSize=${pageSize}`)
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
        return http.delete(`/references/rejectreferences?id=${id}`)
    }
}