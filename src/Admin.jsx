import React, { useState } from 'react';
import useSWR from 'swr';
import { Flex, Text, Button, Box } from 'rebass';
import { Input, Label } from '@rebass/forms';
import request from 'superagent';
import { useAuth0 } from './services/auth0Wrapper';
import SubscriptionType from './components/SubscriptionType';
import { BASE_URL } from './config';

function Admin() {
  const { getTokenSilently } = useAuth0();
  const [restaurantName, setRestaurantName] = useState('');
  const { data, error, mutate } = useSWR('/api/restaurants', () =>
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
        <Text mb={3} textAlign="center" fontSize={4}>
          Account
        </Text>
        <SubscriptionType
          type={data.subscriptionType}
          subscriptionEnds={data.subscriptionEnds}
          createdAt={data.createdAt}
        />
      </Box>
      <Box height={1} bg="#f2f2f2" my={3} />
      <Box>
        <Text textAlign="center" mb={3} fontSize={4}>
          Ristoranti e menù
        </Text>
        {data.Restaurants.map((restaurant) => (
          <Text key={restaurant.id}>{restaurant.name}</Text>
        ))}
        <Box
          sx={{
            borderRadius: 4,
            boxShadow:
              '0 0.938em 2.188em rgba(50,50,93,.1), 0 0.313em 0.938em rgba(0,0,0,.07)',
          }}
          bg="#fff"
          p={3}
          maxWidth={500}
          mx="auto"
        >
          <Label mb={1} htmlFor="restaurantName">
            Nome
          </Label>
          <Input
            id="restaurantName"
            name="namrestaurantNamee"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
          <Button
            my={3}
            variant="primary"
            onClick={async () => {
              try {
                const token = await getTokenSilently();
                await request
                  .post(`${BASE_URL}/restaurants`)
                  .set('Authorization', `Bearer ${token}`)
                  .send({
                    name: restaurantName,
                  });
                mutate();
                setRestaurantName('');
              } catch (err) {
                alert(err);
              }
            }}
          >
            Aggiungi nuovo ristorante
          </Button>
        </Box>
      </Box>
      <Text color="red">{JSON.stringify(error)}</Text>
    </Flex>
  );
}

export default Admin;
