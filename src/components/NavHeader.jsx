import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import { useAuth0 } from '../services/auth0Wrapper';
import HeaderProfile from './HeaderProfile';
import { FaUser } from 'react-icons/fa';
import { Route, Link } from 'react-router-dom';

export default function NavHeader() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <Flex
      sx={{
        position: 'sticky',
      }}
      mx={3}
      height={50}
      backgroundColor="transparent"
      bg="#fff"
      my={3}
    >
      <Box maxWidth={1152} mx="auto" width={1}>
        <Flex
          width={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {isAuthenticated ? (
            <>
              <Route exact path="/">
                <HeaderProfile />
                <Link to="/dashboard">
                  <Button variant="outline">
                    <Flex>
                      <FaUser />
                      <Text ml={2}>Pannello di controllo</Text>
                    </Flex>
                  </Button>
                </Link>
              </Route>
              <Route exact path="/dashboard">
                <HeaderProfile />
                <Button variant="outline" onClick={() => logout()}>
                  Logout
                </Button>
              </Route>
            </>
          ) : (
            <Flex flex={1} justifyContent="flex-end">
              <Button variant="outline" onClick={() => loginWithRedirect()}>
                <Flex>
                  <FaUser />
                  <Text ml={2}>Accedi</Text>
                </Flex>
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
