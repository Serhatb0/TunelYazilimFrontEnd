import http from "./httpCommon";

export default class ProductService {
  getProductAll() {
  
    return http.get(`/product/getAll`);
}
  getProduct(pageNo,pageSize) {
  
      return http.get(`/product/findByactiveTrue?pageNo=${pageNo}&pageSize=${pageSize}`);
  }
  getProductById(id) {
    return http.get(`/product/getAllById?id=${id}`);
  }
  add(values) {
    return http.post(`/product/add`, values);
  }

  update(id, values) {
    return http.put(`/product/update?id=${id}`, values);
  }

  delete(id) {
    return http.post(`/product/rejectProduct?id=${id}`);
  }
}
