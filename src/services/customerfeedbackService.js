import http from "./httpCommon";

class CustomerFeedbackService {
  getCustomerFeedback() {
    return http.get("/customerfeedback/getAll");
  }

  getCustomerFeedbackById(id) {
    return http.get(`/customerfeedback/getAllById?id=${id}`);
  }

  update(id, values) {
    return http.put(`/customerfeedback/update?id=${id}`, values);
  }

  add(values) {
    return http.post(`/customerfeedback/add`, values);
  }

  delete(id) {
    return http.delete(`/customerfeedback/delete?id=${id}`);
  }
}

export default new CustomerFeedbackService();
