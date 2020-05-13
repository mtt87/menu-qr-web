import React from 'react';
import useSWR from 'swr';
import { Flex, Text, Box } from 'rebass';
import request from 'superagent';
import { useAuth0 } from './services/auth0Wrapper';
import SubscriptionType from './components/SubscriptionType';
import { BASE_URL } from './config';
import AddRestaurant from './components/AddRestaurant';
import EditRestaurant from './components/EditRestaurant';

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
            <EditRestaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </Flex>
        <AddRestaurant />
      </Box>
      <Text color="red">{JSON.stringify(error)}</Text>
    </Flex>
  );
}

export default Admin;
