import http from "./httpCommon";


class UploadFilesService {
  uploadReferences(id,file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post(`cloudinarys/file/upload?referencesId=${id}`,  formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    
    });
  }
  uploadProduct(id,file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post(`/cloudinarys/file/upload?productId=${id}`,  formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    
    });
  }
  uploadNews(id,file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post(`/cloudinarys/file/upload?newsId=${id}`,  formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    
    });
  }
  

  getFiles() {
    return http.get("/cloudinarys/getAll");
  }
  getFilesProductId(id) {
    return http.get(`/cloudinarys/getAllProductId?id=${id}`);
  }
  getFilesReferencesId(id) {
    return http.get(`/cloudinarys/getAllReferencesId?id=${id}`);
  }
  getFilesNewsId(id) {
    return http.get(`/cloudinarys/getAllNewsNameId?id=${id}`);
  }

  delete(id) {
    return http.delete(`/cloudinarys/delete/${id}`);
  }
}

export default new UploadFilesService();



