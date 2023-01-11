import { PlaylistAddOutlined } from "@mui/icons-material"

export const initialState = {
    images: [],
    currentImageUrl: '',
    url: '',
    time: ''
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_IMAGES':
            return {
                ...state,
                images: action.images
            }
        case 'SEND_IMAGE':
            console.log(action.time)
            return {
                ...state,
                time: action.time
            }
        case 'UPDATE_CURRENT_URL':
            console.log(`reducer ${action.currentImageUrl}`)
            return {
                ...state,
                // currentImageUrl: action.currentImageUrl
            }
        default:
            return state
    }
}

export default imageReducer
