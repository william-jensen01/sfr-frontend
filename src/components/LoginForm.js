import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChanges = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.credentials, this.props.history);
        this.setState({
            credentials: {
                username: "",
                password: ""
            }
        });
    };

    render() {
        if (localStorage.getItem('token')) {
            return <Redirect to='/recipes' />;
        }
        return (
            <div className="login-wrapper">
                {this.props.loggingIn ? (
                    <h2>Loading</h2>
                ) : (
                    <>
                    <Container className="login-signup-form-container">
                        <h3>Login</h3>
                        <Form className="login-signup-form" onSubmit={this.handleSubmit}>
                            <Col>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input
                                        type="text"
                                        required
                                        name="username"
                                        onChange={this.handleChanges}
                                        value={this.state.credentials.username}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        required
                                        name="password"
                                        onChange={this.handleChanges}
                                        value={this.state.credentials.password}
                                    />
                                </FormGroup>
                            </Col>

                            

                            <Button type="submit">Submit</Button>
                            <p className="small-text">Don't have an account? Sign up <Link className="small-link" to='/register'>here</Link></p>
                        </Form>
                    </Container>
                    </>
                )}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    success: state.success
});

export default connect(mapStateToProps, { login })(LoginForm);