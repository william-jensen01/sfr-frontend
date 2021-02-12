import React from 'react';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import { getRecipe } from '../store/actions';
import Loading from './Loading';

class RecipeDetails extends React.Component {
    componentDidMount() {
        this.props.getRecipe(this.props.match.params.id);
    }
    render() {
        if (this.props.fetchingRecipe) {
            return <Loading />
        }
        return (
            <>
            <Navigation />
            <div className="recipe">
                <div className="recipe-title">
                    <h2>{this.props.recipe.recipe_name}</h2>
                    <h4>{this.props.recipe.category.split(",")}</h4>
                </div>
                <div className="recipe-bottom">
                    <div className="recipe-ingredients">
                        <h4>Ingredients:</h4>
                        <p>{this.props.recipe.ingredients}</p>
                    </div>
                    <div className="recipe-instructions">
                        <h4>Instructions:</h4>
                        <p>{this.props.recipe.instructions}</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    recipe: state.recipe,
    fetchingRecipe: state.fetchingRecipe
})

export default connect (mapStateToProps, {getRecipe})(RecipeDetails);