import React from 'react';
import { Flex, Box, Button, Text } from 'rebass';
import { useAuth0 } from '../services/auth0Wrapper';
import HeaderProfile from './HeaderProfile';
import { FaUser } from 'react-icons/fa';

export default function NavHeader() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <Flex
      sx={{
        position: 'sticky',
      }}
      px={3}
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
              <HeaderProfile />
              <Button variant="outline" onClick={() => logout()}>
                Logout
              </Button>
            </>
          ) : (
            <Flex flex={1} justifyContent="flex-end">
              <Button variant="outline" onClick={() => loginWithRedirect()}>
                <Flex>
                  <FaUser />
                  <Text ml={2}>Area ristoratore</Text>
                </Flex>
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
