import axios from "axios";

const apiUrl = "https://pixabay.com/api";
const apiKey = "11047628-635bca23b99c10143c7630956";
let fetchedImages = [];

export const sendImage = () => {
    console.log('send image');
    return dispatch => {
        axios.get('/time')
            .then(function (response) {
                dispatch({
                    type: 'SEND_IMAGE',
                    time: response.data.time
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const fetchImages = () => {
    return dispatch => {
        axios.get(`${apiUrl}/?key=${apiKey}&q=turtle|tortoise&image_type=photo&safesearch=true`)
            .then(function (response) {
                fetchedImages = response.data.hits
                dispatch({
                    type: 'FETCH_IMAGES',
                    images: response.data.hits
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const getImages = () => {
    if (fetchedImages.length == 0) {
        fetchImages()
    } else return {
        type: 'FETCH_IMAGES',
        images: fetchedImages
    }
}