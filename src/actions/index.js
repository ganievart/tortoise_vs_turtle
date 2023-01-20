import axios from "axios";

const apiKey = "11047628-635bca23b99c10143c7630956";
const query = "turtle|tortoisу";
const perPage = 10;
let fetchedImages = [];

export const updateCurrentImage = (curentImage) => {
    var url = (typeof curentImage === "undefined" ? '' : curentImage.webformatURL)
    return {
        type: 'UPDATE_CURRENT_URL',
        currentImageUrl: url
    }
}


export const sendImage = (data) => {
    console.log(`send image ${data}`);
    return dispatch => {
        dispatch({
            type: 'IS_LOADING',
            isLoading: true
        })
        axios.post('/api', data, {
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            dispatch({
                type: 'SEND_IMAGE',
                result: response.data
            });
            dispatch({
                type: 'IS_LOADING',
                isLoading: false
            })
        }).catch(function (error) {
            console.log(error);
        });
    }
}

const fetchTotalHits = async () => {
    const totalHitsUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=${perPage}`;
    return await axios.get(totalHitsUrl);
}

export const fetchImages = () => {
    return dispatch => {
        fetchTotalHits()
            .then(response => {
                const totalHits = response.data.totalHits;
                const randomPage = Math.floor(Math.random() * (totalHits / perPage)) + 1;
                const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=${perPage}&page=${randomPage}`;
                return axios.get(url);
            })
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