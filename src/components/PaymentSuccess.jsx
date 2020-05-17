import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Heading, Image, Button } from 'rebass';
import imgThanks from '../images/thanks.svg';

function PaymentSuccess() {
  return (
    <Flex
      maxWidth={1152}
      width={1}
      mx="auto"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={4}
    >
      <Box mb={5} flex={1}>
        <Heading fontSize={5} color="green" mb={4}>
          Pagamento avvenuto con successo
        </Heading>
        <Flex justifyContent="center">
          <Link to="/dashboard">
            <Button variant="primary">Torna al pannello di controllo</Button>
          </Link>
        </Flex>
      </Box>
      <Box flex={1}>
        <Image maxWidth={500} src={imgThanks} />
      </Box>
    </Flex>
  );
}

export default PaymentSuccess;
