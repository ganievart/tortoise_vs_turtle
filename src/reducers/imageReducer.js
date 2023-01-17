import { PlaylistAddOutlined } from "@mui/icons-material"

export const initialState = {
    images: [],
    currentImageUrl: '',
    url: '',
    result: '',
    isLoading: false
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_IMAGES':
            return {
                ...state,
                images: action.images
            }
        case 'SEND_IMAGE':
            console.log(action.result)
            return {
                ...state,
                result: action.result,
            }
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case 'UPDATE_CURRENT_URL':
            return {
                ...state,
                currentImageUrl: action.currentImageUrl
            }
        default:
            return state
    }
}

export default imageReducer
