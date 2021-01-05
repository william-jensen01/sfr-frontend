import React from 'react';
import { addRecipe, getCategories } from '../actions';
import { connect } from 'react-redux';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import Navigation from './Navigation';

class AddRecipe extends React.Component {
    state = {
        title: '',
        category: '',
        source: '',
        ingredients: '',
        instructions: '',
        id: Date.now()
    };

    componentDidMount() {
        this.props.getCategories();
    };

    handleChanges = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.addRecipe(this.state, this.props.history);
    };

    render() {
        return (
            <div className="add-recipe-container">
                <Navigation />
                <Container>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label>Title:</Label>
                            <Input
                                type="text"
                                name="title"
                                onChange={this.handleChanges}
                                value={this.state.title}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label>Categories:</Label>
                            <Input type="select" onChange={this.handleChanges} name='category'>
                                {this.props.categories.map(category =>
                                <option value={category.id}>{category.name}</option>
                                )}
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label>Source:</Label>
                            <Input
                                type="text"
                                name="source"
                                onChange={this.handleChanges}
                                value={this.state.source}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label>Ingredients:</Label>
                            <Input
                                type="textarea"
                                name="ingredients"
                                onChange={this.handleIngredientChanges}
                                value={this.state.ingredients}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label>Instructions:</Label>
                            <Input
                                type="textarea"
                                name="instructions"
                                onChange={this.handleChanges}
                                value={this.state.instructions}
                            />
                        </FormGroup>
                    </Col>
                    <Button>Add Recipe</Button>
                </Form>
                </Container>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    categories: state.categories
});

export default connect(mapStateToProps, { addRecipe, getCategories })(AddRecipe);