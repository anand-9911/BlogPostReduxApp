import JsonPlaceHolder from "../apis/JsonPlaceHolder";
import _ from 'lodash';
export const fetchPostsAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // console.log(getState().posts);
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
    /*
    //Using the chaining of lodash to perform the steps that is performed in other steps
        _.chain(getState().posts)
            .map('userID')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value()
            */
}

export const fetchPosts = () => async dispatch => {
    const response = await JsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FTECH_POSTS',
        payload: response.data
    });
};

export const fetchUser = id => async dispatch => {
    const response = await JsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};
