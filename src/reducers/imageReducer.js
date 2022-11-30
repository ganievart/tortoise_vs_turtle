export const initialState = {
    images: []
}

const imageReducer = (state = initialState, action) => {
    console.log(state.images)
    switch (action.type) {
        case 'FETCH_IMAGES':
            return {
                images: action.images
            }
        default:
            return state
    }
}

export default imageReducer
