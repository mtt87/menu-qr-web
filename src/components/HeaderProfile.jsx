import React from 'react';
import { Flex, Text, Image } from 'rebass';
import { useAuth0 } from '../services/auth0Wrapper';

const HeaderProfile = () => {
  const { loading, user } = useAuth0();
  if (loading || !user) {
    return null;
  }
  return (
    <Flex mr={2} alignItems="center">
      <Image
        src={user.picture}
        width={32}
        sx={{
          borderRadius: 32,
        }}
      />
      <Text fontSize={1} fontWeight="body" ml={2}>
        {user.email}
      </Text>
    </Flex>
  );
};

export default HeaderProfile;
