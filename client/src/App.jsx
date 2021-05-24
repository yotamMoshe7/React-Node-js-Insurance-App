import React from 'react';
import './App.css';
import {
  FORM_PAGE_ROUTE,
  OFFER_PAGE_ROUTE,
} from './utility/constants/Constants';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Tab } from './components/tab/Tab';
import { FormPage } from './pages/form-page/FormPage';
import { OfferPage } from './pages/offer-page/OfferPage';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Tab />
        <Switch>
          <Route exact path={FORM_PAGE_ROUTE}>
            <FormPage />
          </Route>
          <Route exact path={OFFER_PAGE_ROUTE}>
            <OfferPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
