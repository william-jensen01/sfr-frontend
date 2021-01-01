import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import RecipesDashboard from './components/RecipesDashboard';
import Recipe from './components/Recipe';
import EditRecipe from './components/EditRecipe';
import AddRecipe from './components/AddRecipe';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage';
import About from './components/About';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/register' component={SignupForm} />
          <PrivateRoute exact path='/recipes' component={RecipesDashboard} />
          <PrivateRoute path='/recipes/:id' component={Recipe} />
          <PrivateRoute path='/recipes/edit/:id' component={EditRecipe} />
          <PrivateRoute path='/add-recipe' component={AddRecipe} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
