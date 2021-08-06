import http from "./httpCommon";


export default class OnlineOrderServie{
    getOrder(){
        return http.get("/onlineOrder/getAll")
    }

    getOrderId(id){
        return http.get(`/onlineOrder/getAllById?id=${id}`)
    }

    add(values){
        return http.post("/onlineOrder/add",values);
    }

    
    delete(id){
        return http.delete(`/onlineOrder/delete?id=${id}`);
    }

      
   
}