import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';
import NotFound from './components/NotFound/NotFound';
import ParkView from './components/protected/ParkView';
import ProtectedRoute from './components/protected/ProtectedRoute';


function App(): JSX.Element {
  return (
    <Fragment>
      <Switch>

        <Route path="/auth">
          <Auth />
        </Route>
        <ProtectedRoute exact path="/homepage" component={ParkView} />
        {/* <Route path="/" component={NotFound} /> */}
      </Switch>

    </Fragment>

  );
}

export default App;