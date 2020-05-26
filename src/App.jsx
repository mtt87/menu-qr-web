import React from 'react';
import { Flex } from 'rebass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Admin from './Admin';
import { useAuth0 } from './services/auth0Wrapper';
// import NavHeader from './components/NavHeader';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentCancel from './components/PaymentCancel';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return null;
  }
  return (
    <Router>
      <Flex height="100%" flex={1} flexDirection="column">
        {/* <NavHeader /> */}
        <Switch>
          <Route path="/payment_success">
            <PaymentSuccess />
          </Route>
          <Route path="/payment_cancel">
            <PaymentCancel />
          </Route>
          <PrivateRoute path="/dashboard" component={Admin} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Flex>
    </Router>
  );
}

export default App;
