export default (state = [], action) => {

    switch (action.type) {
        case 'FTECH_POSTS':
            return action.payload;
        default:
            return state;
    }
}