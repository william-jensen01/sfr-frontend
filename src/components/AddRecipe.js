import React from 'react';
import { addRecipe } from '../store/actions';
import { connect } from 'react-redux';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import Navigation from './Navigation';

class AddRecipe extends React.Component {
    state = {
        recipe_name: '',
        category: '',
        source: '',
        ingredients: '',
        instructions: '',
    };

    handleChanges = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.addRecipe(this.state);
    };

    render() {
        return (
            <div className="add-recipe-container">
                <Navigation />
                <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup>
                            <Label>Recipe Name:</Label>
                            <Input
                                type="text"
                                name="recipe_name"
                                onChange={this.handleChanges}
                                value={this.state.recipe_name}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label>Categories:</Label>
                            <Input
                                type="text"
                                name="category"
                                onChange={this.handleChanges}
                                value={this.state.category}
                            />
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
                                onChange={this.handleChanges}
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

export default connect(null, { addRecipe })(AddRecipe);