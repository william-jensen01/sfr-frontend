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
    recipe: null,
    recipes: [],
    error: null,
    registering: false,
    loggingIn: false,
    fetchingRecipe: false,
    addingRecipe: false,
    updatingRecipe: false,
    deletingRecipe: false,
    fetchingRecipes: false,
    uniqueTags: ["all"],
    currentRecipes: [],
    success: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            return {
                ...state,
                error: null,
                registering: true,
                success: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                error: null,
                registering: false,
                success: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                registering: null,
                success: false
            }
        case LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true,
                success: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggingIn: false,
                success: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false,
                success: false
            }
        case ADD_RECIPE_START:
            return {
                ...state,
                error: null,
                addingRecipe: true,
                recipes: action.payload,
                success: false
            }
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                addingRecipe: false,
                recipes: action.payload,
                success: true
            }
        case ADD_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingRecipe: false,
                success: false
            }
        case EDIT_RECIPE_START:
            return {
                ...state,
                error: null,
                updatingRecipe: true,
                success: false
            }
        case EDIT_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                updatingRecipe: false,
                recipe: action.payload,
                success: true
            }
        case EDIT_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                updatingRecipe: false,
                success: false
            }
        case DELETE_RECIPE_START:
            return {
                ...state,
                error: null,
                deletingRecipe: true,
                success: false
            }
        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                recipes: action.payload,
                deletingRecipe: false,
                success: true
            }
        case DELETE_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                deletingRecipe: false,
                success: false
            }
        case GET_RECIPE_START:
            return {
                ...state,
                fetchingRecipe: true,
                error: null,
                success: false
            }
        case GET_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                fetchingRecipe: false,
                recipe: action.payload,
                success: true
            }
        case GET_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingRecipe: false,
                success: false
            }
        case GET_RECIPE_LIST_START:
            return {
                ...state,
                error: null,
                fetchingRecipes: true,
                success: false
            }
        case GET_RECIPE_LIST_SUCCESS:
            const tempUniqueTags = ["all"];
            action.payload.recipes.forEach(recipe => {
                recipe.tags.forEach(tag => {
                    if (!tempUniqueTags.includes(tag)) {
                        tempUniqueTags.push(tag);
                    }
                });
            });
            return {
                ...state,
                recipes: action.payload,
                fetchingRecipes: false,
                error: null,
                uniqueTags: tempUniqueTags,
                currentRecipes: action.payload.recipes,
                success: true
            }
        case GET_RECIPE_LIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingRecipes: false,
                success: false
            }
        // case SEARCH_RECIPE:
        //     return {
        //         ...state,
        //         filteredRecipes: action.payload,
        //     }
        // case GET_CATEGORIES_START:
        //     return {
        //         ...state,
        //         fetchingCategories: true,
        //     }
        // case GET_CATEGORIES_SUCCESS:
        //     return {
        //         ...state,
        //         fetchingCategories: false,
        //         categories: action.payload
        //     }
        // case GET_CATEGORIES_FAILURE:
        //     return {
        //         ...state,
        //         fetchingCategories: false,
        //         error: action.payload
        //     }
        default:
            return state;
    }
};

export default reducer;