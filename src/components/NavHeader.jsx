import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { useAuth0 } from '../services/auth0Wrapper';
import HeaderProfile from './HeaderProfile';

export default function NavHeader() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <Flex
      sx={{
        position: 'sticky',
      }}
      px={3}
      height={50}
      flexDirection="row"
      backgroundColor="transparent"
      alignItems="center"
      bg="#fff"
    >
      <Box mr={4}></Box>
      <Flex flex={1}></Flex>
      <Flex flexDirection="row" alignItems="center" justifyContent="flex-end">
        {isAuthenticated ? (
          <>
            <HeaderProfile />
            <Button variant="outline" onClick={() => logout()}>
              Logout
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={() => loginWithRedirect()}>
            Area ristoratore
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
