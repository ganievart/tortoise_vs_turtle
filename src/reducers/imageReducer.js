import { PlaylistAddOutlined } from "@mui/icons-material"

export const initialState = {
    images: [],
    currentImage: '',
    url: '',
    time: ''
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_IMAGES':
            return {
                images: action.images
            }
        case 'SEND_IMAGE':
            console.log(action.time)
            return {
                ...state,
                time: action.time
            }
        default:
            return state
    }
}

export default imageReducer
