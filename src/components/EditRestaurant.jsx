import React, { useState } from 'react';
import { Box, Flex, Text, Button } from 'rebass';
import { useAuth0 } from '../services/auth0Wrapper';
import { FaTrash, FaPlus } from 'react-icons/fa';
import request from 'superagent';
import { BASE_URL } from '../config';
import AddUpload from './AddUpload';
import EditUpload from './EditUpload';
import { mutate } from 'swr';

function EditRestaurant({ restaurant }) {
  const [addNewMenu, setAddNewMenu] = useState(false);
  const { getTokenSilently } = useAuth0();
  return (
    <Flex
      sx={{
        borderRadius: 4,
        boxShadow:
          '0 0.938em 2.188em rgba(50,50,93,.1), 0 0.313em 0.938em rgba(0,0,0,.07)',
      }}
      bg="#fff"
      p={4}
      minHeight={250}
      my={3}
      flexDirection="column"
    >
      <Flex mb={3} justifyContent="space-between">
        <Text fontSize={4} key={restaurant.id}>
          {restaurant.name}
        </Text>
        <Flex>
          <Button
            onClick={async () => {
              if (
                window.confirm(
                  `Sei sicuro che vuoi eliminare il ristorante ${restaurant.name} e tutti i menu caricati? Attenzione: l'operazione non e' reversibile!`,
                )
              ) {
                try {
                  const token = await getTokenSilently();
                  await request
                    .delete(`${BASE_URL}/restaurants/${restaurant.id}`)
                    .set('Authorization', `Bearer ${token}`);
                  mutate('/restaurants');
                } catch (err) {
                  alert("C'é stato un problema, riprova");
                }
              }
            }}
            bg="#d9455f"
          >
            <Flex>
              <FaTrash />
              <Text ml={2}>Rimuovi</Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
      <Flex flex={1} height="100%" mx={-2} flexDirection="row" flexWrap="wrap">
        {restaurant.Uploads.map((data) => (
          <EditUpload key={data.id} data={data} restaurantId={restaurant.id} />
        ))}
        {addNewMenu ? (
          <AddUpload restaurantId={restaurant.id} />
        ) : (
          <Box
            onClick={() => setAddNewMenu(true)}
            sx={{ cursor: 'pointer' }}
            p={2}
          >
            <Flex
              height="100%"
              minWidth={300}
              p={3}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              style={{ border: '1px dashed #ddd', borderRadius: 4 }}
            >
              <FaPlus size={32} />
              <Text mt={3}>
                {!restaurant.Uploads.length
                  ? 'Aggiungi il tuo primo menu'
                  : 'Hai piu di un menu? Aggiungine un altro'}
              </Text>
            </Flex>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}

export default EditRestaurant;
