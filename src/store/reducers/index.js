import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_RECIPE_LIST_START,
    GET_RECIPE_LIST_SUCCESS,
    GET_RECIPE_LIST_FAILURE,
    GET_RECIPE_START,
    GET_RECIPE_SUCCESS,
    GET_RECIPE_FAILURE,
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILURE,
    EDIT_RECIPE_START,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
    SEARCH_RECIPE
} from '../actions';

const initialState = {
    recipe: {
        name: '',
        source: '',
        ingredients: '',
        instructions: '',
        category: '',
        id: ''
    },
    recipes: [],
    filteredRecipes: [],
    error: null,
    registering: false,
    loggingIn: false,
    fetchingRecipe: false,
    addingRecipe: false,
    updatingRecipe: false,
    deletingRecipe: false,
    fetchingRecipes: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                registering: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                loggedIn: true
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                registering: null,
            }
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggingIn: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false,
            }
        case ADD_RECIPE_START:
            return {
                ...state,
                error: null,
                addingRecipe: true,
            }
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                addingRecipe: false,
            }
        case ADD_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingRecipe: false,
            }
        case EDIT_RECIPE_START:
            return {
                ...state,
                error: null,
                updatingRecipe: true,
            }
        case EDIT_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                updatingRecipe: false,
                recipe: action.payload,
            }
        case EDIT_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                updatingRecipe: false,
            }
        case DELETE_RECIPE_START:
            return {
                ...state,
                error: null,
                deletingRecipe: true,
            }
        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                recipes: action.payload,
                deletingRecipe: false,
            }
        case DELETE_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                deletingRecipe: false,
            }
        case GET_RECIPE_START:
            return {
                ...state,
                fetchingRecipe: true,
                error: null,
            }
        case GET_RECIPE_SUCCESS:
            return {
                ...state,
                fetchingRecipe: false,
                recipe: action.payload,
            }
        case GET_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingRecipe: false,
            }
        case GET_RECIPE_LIST_START:
            return {
                ...state,
                error: null,
                fetchingRecipes: true,
            }
        case GET_RECIPE_LIST_SUCCESS:
            return {
                ...state,
                recipes: action.payload,
                fetchingRecipes: false,
            }
        case GET_RECIPE_LIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingRecipes: false,
            }
        case SEARCH_RECIPE:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        default:
            return state;
    }
};

export default reducer;