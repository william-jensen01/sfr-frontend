import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import RecipesDashboard from './components/RecipesDashboard';
import Recipe from './components/Recipe';
import EditRecipe from './components/EditRecipe';
import AddRecipe from './components/AddRecipe';
// import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage';
import About from './components/About';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
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

          {/*  change to private route after you learn backend auth!*/}
          <Route exact path='/recipes' component={RecipesDashboard} /> 
          <Route path='/edit/:id' component={EditRecipe} />
          <Route path='/add' component={AddRecipe} />
          <Route path='/recipes/view/:id' component={Recipe} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
