import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILURE,
    EDIT_RECIPE_START,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
    GET_RECIPE_START,
    GET_RECIPE_SUCCESS,
    GET_RECIPE_FAILURE,
    GET_RECIPE_LIST_START,
    GET_RECIPE_LIST_SUCCESS,
    GET_RECIPE_LIST_FAILURE,
    SEARCH_RECIPE,
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE
} from '../actions';

const initialState = {
    isLoggedIn: false,
    recipes: [],
    filteredRecipes: [],
    categories: [],
    addingRecipe: false,
    fetchingCategories: false,
    fetchingRecipes: false,
    fetchingRecipe: false,
    editingRecipe: false,
    deletingRecipe: false,
    error: null,
    registeringUser: false,
    loggingIn: false,
    recipe: {
        title: '',
        source: '',
        ingredients: [],
        instructions: '',
        category: '',
        id: '',
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                registeringUser: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registeringUser: false,
                isLoggedIn: true,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                registeringUser: false,
            }
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: true,
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
                addingRecipe: true,
            }
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
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
                editingRecipe: true,
            }
        case EDIT_RECIPE_SUCCESS:
            return {
                ...state,
                editingRecipe: false,
            }
        case EDIT_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                editingRecipe: false,
            }
        case DELETE_RECIPE_START:
            return {
                ...state,
                deletingRecipe: true,
            }
        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
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
                fetchingRecipe: false,
                error: action.payload,
            }
        case GET_RECIPE_LIST_START:
            return {
                ...state,
                fetchingRecipes: true,
            }
        case GET_RECIPE_LIST_SUCCESS:
            return {
                ...state,
                fetchingRecipes: false,
                recipes: action.payload,
            }
        case GET_RECIPE_LIST_FAILURE:
            return {
                ...state,
                fetchingRecipes: false,
                error: action.payload,
            }
        case SEARCH_RECIPE:
            return {
                ...state,
                filteredRecipes: action.payload,
            }
        case GET_CATEGORIES_START:
            return {
                ...state,
                fetchingCategories: true,
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                fetchingCategories: false,
                categories: action.payload
            }
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                fetchingCategories: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;