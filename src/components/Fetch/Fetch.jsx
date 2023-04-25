//import axios from "axios";

const API_KEY = '34077503-5bfdb6066ba2aa1107947cc02';
const BASE_URL = 'https://pixabay.com/api/';

//axios.defaults.baseURL = "https://pixabay.com/api";

export const getFetch = (query,  page = 1) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error(`On request ${query} no images`));
    }
    return response.json();
  });
};

/*
export const getFetch = async(query, page = 1, per_page = 12) => {
  try { const response = await axios.get("/", {
        params: {
            page,
            per_page,
            key: KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
        }
    })
    return response.data;
  }
  catch (error) {
      console.log({ error });
    } 
   
}
*/