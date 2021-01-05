import React from 'react';
import Navigation from './Navigation';
import { getRecipeList } from '../actions'
import { connect } from 'react-redux';

function RecipesDashboard () {
    return (
        <div>
            <Navigation />
            <h2>Welcome to Recipes Dashboard!</h2>
        </div>
    )
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes
})

export default connect(mapStateToProps, { getRecipeList })(RecipesDashboard);