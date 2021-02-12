import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import SmallRecipe from './SmallRecipe';
import Loading from './Loading';
import { getRecipes } from '../store/actions';
import { connect } from 'react-redux';

class RecipesDashboard extends React.Component {
    componentDidMount() {
        this.props.getRecipes();

    }
    render() {
        if (this.props.fetchingRecipes) {
            return <Loading />
        }
        let displayedRecipes = [];
        if (this.props.filteredRecipes.length > 0) {
            displayedRecipes = this.props.filteredRecipes;
        } else {
            displayedRecipes = this.props.recipes;
        }
            return (
                <>
                <div className="recipes-dashboard">
                    <Navigation />
                        <div className="header">
                            <h1>Recipes</h1>
                            <SearchBar />
                        </div>
                        <div className="recipes-container">
                            {displayedRecipes.map((recipe) => {
                                return (
                                    <SmallRecipe recipe={recipe} />
                                )
                            })}
                        </div>
                    </div>
                </>
            )
        }
    }

const mapStateToProps = (state) => ({
    fetchingRecipes: state.fetchingRecipes,
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes
})

export default connect(mapStateToProps, { getRecipes })(RecipesDashboard);