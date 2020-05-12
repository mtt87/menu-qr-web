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
      <Text fontSize={1} fontWeight="body" mr={2}>
        {user.email}
      </Text>
      <Image
        src={user.picture}
        width={32}
        sx={{
          borderRadius: 32,
        }}
      />
    </Flex>
  );
};

export default HeaderProfile;
