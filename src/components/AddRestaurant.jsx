import React, { useState } from 'react';
import { Box, Flex, Button, Heading } from 'rebass';
import { Label, Input } from '@rebass/forms';
import { useAuth0 } from '../services/auth0Wrapper';
import { mutate } from 'swr';
import { BASE_URL } from '../config';
import request from 'superagent';

function AddRestaurant({ createRestaurant, first }) {
  const { getTokenSilently } = useAuth0();
  const [restaurantName, setRestaurantName] = useState('');
  return (
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
      <Heading mb={3} as="h3">
        {first ? 'Aggiungi il tuo ristorante' : 'Hai un altro ristorante?'}
      </Heading>
      <Label mb={1} htmlFor="restaurantName">
        Nome
      </Label>
      <Flex justifyContent="flex-end">
        <Input
          id="restaurantName"
          name="namrestaurantNamee"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          flex={1}
          mr={2}
        />
        <Button
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
              mutate('/restaurants');
              setRestaurantName('');
            } catch (err) {
              alert(err);
            }
          }}
        >
          {first ? 'Salva' : 'Aggiungi'}
        </Button>
      </Flex>
    </Box>
  );
}

export default AddRestaurant;
