import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_RECIPE_START,
    FETCH_RECIPE_SUCCESS,
    FETCH_RECIPE_FAILURE,
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILURE,
    UPDATE_RECIPE_START,
    UPDATE_RECIPE_SUCCESS,
    UPDATE_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE,
    FETCH_RECIPES_START,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE
  } from "../actions";

  const initialState = {
    recipe: null,
    titles: [],
    error: null,
    signingUp: false,
    loggingIn: false,
    fetchingRecipe: false,
    addingRecipe: false,
    updatingRecipe: false,
    deletingRecipe: false,
    fetchingTitles: false,  
    uniqueTags: ["all"],
    currentRecipes: [],
    success: false
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_START:
            return {
                ...state,
                error: null,
                signingUp: true,
                success: false
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                error: null,
                signingUp: false,
                success: true
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                signingUp: null,
                success: false
            };
        
        case LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true,
                success: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggingIn: false,
                success: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false,
                success: false
            };
        
        case FETCH_RECIPE_START:
            return {
                ...state,
                fetchingRecipe: true,
                error: null,
                success: false
            };
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                fetchingRecipe: false,
                recipe: action.payload,
                success: true
            };
        case FETCH_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingRecipe: false,
                success: false
            };

        case ADD_RECIPE_START:
            return {
                ...state,
                error: null,
                addingRecipe: true,
                recipes: action.payload,
                success: false
            };
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                addingRecipe: false,
                recipes: action.payload,
                success: true
            };
        case ADD_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingRecipe: false,
                success: false
            };

        case UPDATE_RECIPE_START:
            return {
                ...state,
                error: null,
                updatingRecipe: true,
                success: false
            };
        case UPDATE_RECIPE_SUCCESS:
            return {
                ...state,
                error: null,
                updatingRecipe: false,
                recipe: action.payload,
                success: true
            };
        case UPDATE_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                updatingRecipe: false,
                success: false
            };

        case DELETE_RECIPE_START:
            return {
                ...state,
                error: null,
                deletingRecipe: true,
                success: false
            };
        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: action.payload,
                deletingRecipe: false,
                error: null,
                success: true
            };
        case DELETE_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                deletingRecipe: false,
                success: false
            };
        
            case FETCH_RECIPES_START:
                return {
                    ...state,
                    error: null,
                    fetchingTitles: true,
                    success: false
                };
            case FETCH_RECIPES_SUCCESS:
                const tempUniqueTags = ['all'];
                action.payload.recipes.forEach(title => {
                    title.tags.forEach(tag => {
                        if (!tempUniqueTags.includes(tag)) {
                            tempUniqueTags.push(tag);
                        }
                    });
                });
                console.log('payload', action.payload.recipes)
                return {
                    ...state,
                    titles: action.payload,
                    fetchingTitles: false,
                    error: null,
                    uniqueTags: tempUniqueTags,
                    currentRecipes: action.payload.recipes,
                    success: true
                };
            case FETCH_RECIPES_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    fetchingTitles: false,
                    success: false
                };

        default:
            return state;
    }
  };

  export default reducer;