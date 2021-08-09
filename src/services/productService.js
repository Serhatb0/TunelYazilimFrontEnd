import http from "./httpCommon";

export default class ProductService {
  getProduct(id) {
    if (id) {
      return http.get(`/product/getAllById?id=${id}`);
    } else {
      return http.get("/product/getAll");
    }
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
    return http.delete(`/product/delete?id=${id}`);
  }
}
