import React from 'react';
import { Flex } from 'rebass';
import Home from './Home';
import Admin from './Admin';
import { useAuth0 } from './services/auth0Wrapper';
import NavHeader from './components/NavHeader';

function App() {
  const { isAuthenticated, loading } = useAuth0();
  if (loading) {
    return null;
  }
  return (
    <Flex height="100%" flex={1} flexDirection="column">
      <NavHeader />
      {!isAuthenticated ? <Home /> : <Admin />}
    </Flex>
  );
}

export default App;
