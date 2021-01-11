import React from 'react';
import { connect } from 'react-redux';
import { search } from '../actions';
import { Input } from 'reactstrap';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
            <Input
                className="searchbar"
                placeholder="Search for Recipes..."
                onChange={(e) => this.props.search(e.target.value, this.props.recipes)}
            />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    recipes: state.recipes
});

export default connect (mapStateToProps, { search })(SearchBar);