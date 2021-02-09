import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/actions';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SignupForm extends React.Component {
    state = {
        username: "",
        password1: "",
        password2: "",
        passwordMatch: true
    };

    handleChanges = (e) => {
        e.persist();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password1 === this.state.password2) {
            const newUser = {
                username: this.state.username,
                password: this.state.password1
            };
            this.props.register(newUser, this.props.history);
            
        } else {
            this.setState({ ...this.state, passwordMatch: false });
        }
    };

    render () {
        return (
            <div className="signup">
                {this.props.signingUp ? (
                    <h2>Loading</h2>
                ) : (
                    <>
                    <Container className="login-signup-form-container">
                        <h3>Sign Up</h3>
                        <Form className="login-signup-form" onSubmit={this.handleSubmit}>
                            <Col>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input
                                    type="text"
                                    required
                                    name="username"
                                    onChange={this.handleChanges}
                                    value={this.state.username}
                                    />
                                </FormGroup>
                            </Col>
                            
                            <Col>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                    type="password"
                                    required
                                    name="password1"
                                    onChange={this.handleChanges}
                                    value={this.state.password1}
                                    />
                                </FormGroup>
                            </Col>
                            
                            <Col>
                                <FormGroup>
                                    <Label>Confirm Password</Label>
                                    <Input
                                    type="password"
                                    required
                                    name="password2"
                                    onChange={this.handleChanges}
                                    value={this.state.password2}
                                    />
                                </FormGroup>
                            </Col>

                            {!this.state.passwordMatch ? (
                                <p>Oops! Your passwords don't match</p>
                            ) : (
                                ""
                            )}

                            <Button className="btn">Sign Up</Button>

                            <p className="small-text">Already have an account? Login <Link to='/login' className="small-link">here </Link></p>
                        </Form>
                    </Container>
                    </>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    registeringUser: state.registeringUser
});

export default connect(mapStateToProps,{ register })(SignupForm);
