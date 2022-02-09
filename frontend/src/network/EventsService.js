import axios from "./axios.js";

const EventsService = {};

const basePath = process.env.NODE_ENV === 'dev' ? "http://localhost:4000" : window.location.origin;

EventsService.get = async (options = {}) => {
  try {
    const path = new URL(basePath + "/events");
    Object.entries(options).forEach(([key, value]) => path.searchParams.append(key, value));
    return await axios.get(path.toString());
  } catch (e) {
    console.error(e);
  }
};

export default EventsService;
