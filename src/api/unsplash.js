import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID qXrcgsvhlKMODYCHa7KinpcVkAAQGepV7qHP2mZZ06A",
  }
});