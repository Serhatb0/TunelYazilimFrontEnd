import axios from "axios";


export default axios.create({
    baseURL: "https://tunel.herokuapp.com/api",
    headers: {
      "Content-type": "application/json"
    }
  });