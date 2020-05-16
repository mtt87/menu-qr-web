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
  if (error) {
    return (
      <Text textAlign="center" color="red">
        Errore caricamento
      </Text>
    );
  }
  if (!data) {
    return <Text textAlign="center">Caricamento</Text>;
  }
  return (
    <Flex
      width={1}
      maxWidth={1152}
      mx="auto"
      mb={4}
      my={2}
      bg="#fff"
      flexDirection="column"
    >
      <Box>
        <SubscriptionType
          type={data.subscriptionType}
          subscriptionEnds={data.subscriptionEnds}
          createdAt={data.createdAt}
        />
      </Box>
      <Box height={1} bg="#f2f2f2" my={4} />
      <Box mb={4}>
        <Flex flexDirection="column" justifyContent="center">
          {data.Restaurants.map((restaurant) => (
            <EditRestaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </Flex>
        <AddRestaurant first={!data.Restaurants.length} />
      </Box>
    </Flex>
  );
}

export default Admin;
