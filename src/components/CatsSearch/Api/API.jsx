import axios from "axios";

axios.defaults.baseURL ='https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] ='api_key=live_Krr5ydXcGBDIdQYBGovFRQkq2DUk7n8XdFEL9HcE9y4zWDPEUZp2PdjkYv6diyFf';

export const fetchBreeds = async () =>{
    const response = await axios.get('/breeds')
    return response.data
}

export const fetchCatByBreed = async breedId => {
    const response = await axios.get(`/images/search?breed_ids=${breedId}`)
return response.data[0]
}