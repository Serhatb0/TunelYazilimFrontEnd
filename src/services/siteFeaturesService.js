


import http from "./httpCommon";


export default class SiteFeaturesService{
    getFeatures(){
        return http.get("/siteFeatures/getAll")
    }

    getFeaturesId(id){
        return http.get(`/siteFeatures/getAllById?id=${id}`)
    }
    update(id,values){
        return http.put(`/siteFeatures/update?id=${id}`,values)
    }

    delete(id){
        return http.delete(`/siteFeatures/delete?id=${id}`)
    }

    getFeaturesByProdutId(id){
        return http.get(`/siteFeatures/getAllProductId?id=${id}`)
    }
    add(id,values){
        return http.post(`/siteFeatures/add?productId=${id}`,values)
    }
}