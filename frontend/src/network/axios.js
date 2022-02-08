import axios from "axios";

const config = {};

if(process.env.NODE_ENV !== 'development') {
  config.baseUrl = "http://localhost:4000"
}

export default axios.create(config);
