import axios from 'axios';
import { axiosWithAuth } from '../../util/axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GET_RECIPE_LIST_START = "GET_RECIPE_LIST_START";
export const GET_RECIPE_LIST_SUCCESS = "GET_RECIPE_LIST_SUCCESS";
export const GET_RECIPE_LIST_FAILURE = "GET_RECIPE_LIST_FAILURE";

export const GET_RECIPE_START = "GET_RECIPE_START";
export const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
export const GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE";

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const EDIT_RECIPE_START = "EDIT_RECIPE_START";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

export const SEARCH_RECIPE = "SEARCH_RECIPE";

export const register = (user, history) => dispatch => {
    dispatch({
        type: REGISTER_START
    })
    axios
        .post("https://lambdaschool-cookbook2.herokuapp.com/auth/register", user)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS
            });
            if (res.data.token) {
                localStorage.setItem('token', res.data.token)
                history.push('/recipes');
            } else {
                user.history.push('/login')
            }
            return true;
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAILURE,
                paylaod: err
            });
            return false;
        })
};

export const login = (user, history) => dispatch => {
    dispatch({
        type: LOGIN_START
    })
    axios
        .post("https://lambdaschool-cookbook2.herokuapp.com/auth/login", user)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS
            });
            localStorage.setItem('token', res.data.token);
            history.push('/recipes');
            return true;
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err
            });
            return false;
        })
};

export const addRecipe = (recipe, history) => dispatch => {
    dispatch({
        type: ADD_RECIPE_START
    });
    axiosWithAuth()
        .post("/recipes", recipe)
        .then(res => {
            dispatch({
                type: ADD_RECIPE_SUCCESS,
                payload: res.data
            });
            const recipe_id = res.data[res.data.length - 1].id
            history.push(`/recipes/view/${recipe_id}`);
        })
        .catch(err => {
            dispatch({
                type: ADD_RECIPE_FAILURE,
                payload: err
            })
        })
};
export const editRecipe = (recipeID, recipe, history) => dispatch => {
    dispatch({
        type: EDIT_RECIPE_START
    });
    axiosWithAuth()
        .put(`/recipes/${recipeID}`, recipe)
        .then(res => {
            dispatch({
                type: EDIT_RECIPE_SUCCESS,
                payload: res.data
            });
            const recipe_id = res.data.id
            history.push(`/recipes/view/${recipe_id}`);
        })
        .catch(err => {
            dispatch({
                type: EDIT_RECIPE_FAILURE,
                payload: err
            })
        })
};

export const deleteRecipe = (recipeID, history) => dispatch => {
    dispatch({
        type: DELETE_RECIPE_START
    });
    axiosWithAuth()
        .delete(`/recipes/${recipeID}`)
        .then(res => {
            dispatch({
                type: DELETE_RECIPE_SUCCESS,
                payload: res.data
            });
            history.push('/recipes');
        })
        .catch(err => {
            dispatch({
                type: DELETE_RECIPE_FAILURE,
                payload: err
            })
        })
};

export const getRecipes = () => dispatch => {
    dispatch({
        type: GET_RECIPE_LIST_START
    })
    axiosWithAuth()
        .get('/recipes')
        .then(res => {
            dispatch({
                type: GET_RECIPE_LIST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPE_LIST_FAILURE,
                payload: err
            })
        })
};

export const getRecipe = (recipeID) => dispatch => {
    dispatch({
        type: GET_RECIPE_START
    })
    axiosWithAuth()
        .get(`/recipes/${recipeID}`)
        .then(res => {
            dispatch({
                type: GET_RECIPE_SUCCESS,
                payload: res.data.recipe
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPE_FAILURE,
                payload: err
            })
        })
};

export const search = (searchString, recipes) => {
    searchString = searchString.toLowerCase();
    let filteredRecipes = recipes.filter(recipe => (
        recipe.name.toLowerCase().includes(searchString)
        || recipe.category.toLowerCase().includes(searchString)
    ))
    return {
        type: SEARCH_RECIPE,
        payload: filteredRecipes
    }
};

// export const getCategories = () => dispatch => {
//     dispatch({
//         type: GET_CATEGORIES_START
//     })
//     axiosWithAuth()
//         .get("https://secret-family-recipes.herokuapp.com/api/categories")
//         .then(res => {
//             dispatch({
//                 type: GET_CATEGORIES_SUCCESS,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             dispatch({
//                 type: GET_CATEGORIES_FAILURE,
//                 payload: err.response
//             })
//         })
// }