import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SmallRecipe extends React.Component {
    render() {
        return (
            <div className="recipe-small-container">
                <div className="recipe-small">
                    <p>{this.props.recipe.recipe_name}</p>
                    <p>{this.props.recipe.source}</p>
                    
                    <Link className="recipe-link" to={`/recipes/view/${this.props.recipe.id}`}>Read Recipe</Link>
                </div>
            </div>
        )
    }
};

export default connect (null, {})(SmallRecipe);