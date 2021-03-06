import React from 'react';
import useSWR from 'swr';
import { Flex, Text, Box, Link } from 'rebass';
import request from 'superagent';
import { useAuth0 } from './services/auth0Wrapper';
import Subscription from './components/Subscription';
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
      {/* <Box>
        <Subscription
          userId={data.id}
          userEmail={data.email}
          status={data.subscriptionStatus}
          subscriptionEnd={data.subscriptionEnd}
          createdAt={data.createdAt}
          totalRestaurants={data.Restaurants.length}
        />
      </Box> */}
      {/* <Box height={1} bg="#f2f2f2" my={4} /> */}
      <Box mb={4}>
        <Flex flexDirection="column" justifyContent="center">
          {data.Restaurants.map((restaurant) => (
            <EditRestaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </Flex>
        {!data.Restaurants.length ? (
          <AddRestaurant first={!data.Restaurants.length} />
        ) : (
          <>
            <Text mb={2} fontSize={3} textAlign="center">
              Hai piú di un ristorante?
            </Text>
            <Text textAlign="center">
              Stiamo lavorando alla possibilitá di inserire più ristoranti,
              contattaci per avere maggiori informazioni.
            </Text>
            <Text mt={3} mb={2} fontSize={3} textAlign="center">
              Hai bisogno di aiuto o vuoi darci dei suggerimenti?
            </Text>
            <Text textAlign="center">
              Invia una mail a{' '}
              <Link
                target="_blank"
                href="mailto:mattia.asti@gmail.com?subject=menu-qr.tech multi ristorante"
              >
                mattia.asti@gmail.com
              </Link>
            </Text>
          </>
        )}
      </Box>
    </Flex>
  );
}

export default Admin;
