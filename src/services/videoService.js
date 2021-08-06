import http from "./httpCommon";

export default class VideoService {
  getvideo() {
    return http.get("/video/getAll");
  }

  getvideoById(id) {
    return http.get(`/video/getAllById?id=${id}`);
  }

  delete(id) {
    return http.delete(`/video/delete?id=${id}`);
  }

  update(id,values) {
    return http.put(`/video/update?id=${id}`,values);
  }

  add(values) {
    return http.post(`/video/add`,values);
  }
}
