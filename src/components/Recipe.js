import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="recipe-container">
                <div className="recipe-small">
                    <p>{this.props.recipe.title}</p>
                    <p>{this.props.recipe.source}</p>
                    
                    <Link to={`/recipes/view/${this.props.recipe.id}`}>Read Recipe</Link>
                </div>
            </div>
        )
    }
};

export default connect (null, {})(Recipe);