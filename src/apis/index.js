import axios from "axios";

export default axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9730ca50b94c478e8e1992f9d1f7caf3'
})