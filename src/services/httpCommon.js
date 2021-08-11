import axios from "axios";


export default axios.create({
    baseURL: "https://tunel.herokuapp.com",
    headers: {
      "Content-type": "application/json"
    }
  });