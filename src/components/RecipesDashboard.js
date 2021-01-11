import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Recipe from './Recipe';
import { getRecipes } from '../actions'
import { connect } from 'react-redux';

class RecipesDashboard extends React.Component {
    componentDidUpdate () {
        this.props.getRecipes();
    };

    render() {
        if (!this.props.currentRecipes || this.props.fetchingRecipes) {
            return <p>Loading...</p>;
        } else {
            // let recipesToDisplay = [];
            // if (this.props.filteredRecipes.length >= 1) {
            //     recipesToDisplay = this.props.filteredRecipes;
            // } else {
            //     recipesToDisplay = this.props.recipes.recipes;
            console.log(this.props.currentRecipes)
            return (
                <div className="recipes-dashboard">
                    <Navigation />
                    <h1>Recipes</h1>
                    <SearchBar />
                    {this.props.currentRecipes.map((recipe) => {
                        return (
                            <Recipe recipe={recipe} />
                        )
                    })}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    // recipes: state.recipes.recipes,
    fetchingRecipes: state.fetchingRecipes,
    currentRecipes: state.currentRecipes
})

export default connect(mapStateToProps, { getRecipes })(RecipesDashboard);