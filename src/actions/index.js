import axios from 'axios';
import { axiosWithAuth } from '../util/axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const EDIT_RECIPE_START = "EDIT_RECIPE_START";
export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
export const EDIT_RECIPE_FAILURE = "EDIT_RECIPE_FAILURE";

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE";

export const GET_RECIPE_START = "GET_RECIPE_START";
export const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
export const GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE";

export const GET_RECIPE_LIST_START = "GET_RECIPE_LIST_START";
export const GET_RECIPE_LIST_SUCCESS = "GET_RECIPE_LIST_SUCCESS";
export const GET_RECIPE_LIST_FAILURE = "GET_RECIPE_LIST_FAILURE";

export const SEARCH_RECIPE = "SEARCH_RECIPE";

export const GET_CATEGORIES_START = "GET_CATEGORIES_START";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const register = (user, history) => dispatch => {
    dispatch({
        type: REGISTER_START
    })
    axios
        .post("https://secret-family-recipes.herokuapp.com/api/auth/register", user)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            if (res.data.token) {
                localStorage.setItem('token', res.data.token)
                history.push('/recipes');
            } else {
                history.push('/login')
            }
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAILURE,
                paylaod: err.response
            })
        })
};

export const login = (user, history) => dispatch => {
    dispatch({
        type: LOGIN_START
    })
    axios
        .post("https://secret-family-recipes.herokuapp.com/api/auth/login", user)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            localStorage.setItem('token', res.data.token);
            history.push('/recipes');
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err.response
            })
        })
};

export const addRecipe = (recipe, history) => dispatch => {
    dispatch({
        type: ADD_RECIPE_START
    })
    axiosWithAuth()
        .post("https://secret-family-recipes.herokuapp.com/api/recipes", recipe)
        .then(res => {
            dispatch({
                type: ADD_RECIPE_SUCCESS,
                payload: res.data
            });
            history.push(`/recipes/view/${recipe.id}`);
        })
        .catch(err => {
            dispatch({
                type: ADD_RECIPE_FAILURE,
                payload: err.response
            })
        })
};

export const editRecipe = (recipe, history) => dispatch => {
    dispatch({
        type: EDIT_RECIPE_START
    });
    axiosWithAuth()
        .put(`https://secret-family-recipes.herokuapp.com/api/recipes/${recipe.id}`, recipe)
        .then(res => {
            dispatch({
                type: EDIT_RECIPE_SUCCESS,
                payload: res.data
            });
            history.push(`/recipes/view/${recipe.id}`);
        })
        .catch(err => {
            dispatch({
                type: EDIT_RECIPE_FAILURE,
                payload: err.response
            })
        })
};

export const deleteRecipe = (recipe, history) => dispatch => {
    dispatch({
        type: DELETE_RECIPE_START
    });
    axiosWithAuth()
        .delete(`https://secret-family-recipes.herokuapp.com/api/recipes/${recipe.id}`)
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
                payload: err.response
            })
        })
};

export const getRecipeList = () => dispatch => {
    dispatch({
        type: GET_RECIPE_LIST_START
    })
    axiosWithAuth()
        .get('https://secret-family-recipes.herokuapp.com/api/recipes')
        .then(res => {
            dispatch({
                type: GET_RECIPE_LIST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPE_LIST_FAILURE,
                payload: err.response
            })
        })
};

export const getRecipe = (id) => dispatch => {
    dispatch({
        type: GET_RECIPE_START
    })
    axiosWithAuth()
        .get(`https://secret-family-recipes.herokuapp.com/api/recipes/${id}`)
        .then(res => {
            dispatch({
                type: GET_RECIPE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECIPE_FAILURE,
                payload: err.response
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

export const getCategories = () => dispatch => {
    dispatch({
        type: GET_CATEGORIES_START
    })
    axiosWithAuth()
        .get("https://secret-family-recipes.herokuapp.com/api/categories")
        .then(res => {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_CATEGORIES_FAILURE,
                payload: err.response
            })
        })
}