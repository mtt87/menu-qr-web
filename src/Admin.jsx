import React from 'react';
import useSWR from 'swr';
import { Flex, Text, Box } from 'rebass';
import request from 'superagent';
import { useAuth0 } from './services/auth0Wrapper';
import SubscriptionType from './components/SubscriptionType';
import { BASE_URL } from './config';
import AddRestaurant from './components/AddRestaurant';

function Admin() {
  const { getTokenSilently } = useAuth0();
  const { data, error } = useSWR('/restaurants', () =>
    getTokenSilently()
      .then((token) => {
        return request
          .get(`${BASE_URL}/restaurants`)
          .set('Authorization', `Bearer ${token}`);
      })
      .then((res) => res.body),
  );
  if (!data) {
    return <Text>Caricamento</Text>;
  }
  return (
    <Flex py={2} height="100%" bg="#fff" px={3} flexDirection="column">
      <Box mb={3}>
        <SubscriptionType
          type={data.subscriptionType}
          subscriptionEnds={data.subscriptionEnds}
          createdAt={data.createdAt}
        />
      </Box>
      <Box height={1} bg="#f2f2f2" my={2} />
      <Box>
        <Flex flexDirection="column" justifyContent="center" mb={4}>
          {data.Restaurants.map((restaurant) => (
            <Box
              sx={{
                borderRadius: 4,
                boxShadow:
                  '0 0.938em 2.188em rgba(50,50,93,.1), 0 0.313em 0.938em rgba(0,0,0,.07)',
              }}
              bg="#fff"
              p={3}
              my={3}
            >
              <Flex>
                <Text fontSize={3} key={restaurant.id}>
                  {restaurant.name}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
        <AddRestaurant />
      </Box>
      <Text color="red">{JSON.stringify(error)}</Text>
    </Flex>
  );
}

export default Admin;
