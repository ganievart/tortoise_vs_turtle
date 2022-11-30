import axios from "axios";

const apiUrl = "https://pixabay.com/api";
const apiKey = "11047628-635bca23b99c10143c7630956";

export const fetchImages = () => {
    return dispatch => {
        axios.get(`${apiUrl}/?key=${apiKey}&q=turtle|tortoise&image_type=photo&safesearch=true`)
            .then(function (response) {
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