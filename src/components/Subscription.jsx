import React from 'react';
import { addDays, format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Text, Button, Flex } from 'rebass';
import { loadStripe } from '@stripe/stripe-js';
import { PRODUCT_ID, STRIPE_KEY } from '../config';
const stripePromise = loadStripe(STRIPE_KEY);

function Subscription({
  userId,
  userEmail,
  status,
  subscriptionEnd,
  createdAt,
  totalRestaurants,
}) {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      clientReferenceId: userId,
      lineItems: [
        // Replace with the ID of your price
        { price: PRODUCT_ID, quantity: 1 },
      ],
      customerEmail: userEmail,
      mode: 'subscription',
      successUrl: `${window.location.origin}/payment_success`,
      cancelUrl: `${window.location.origin}/payment_cancel`,
    });
  };
  if (status === 'TRIAL') {
    return (
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text textAlign="center" mb={3} fontWeight="bold" color="orange">
          {`Periodo di prova gratuito. Scade il ${format(
            addDays(new Date(createdAt), 14),
            'EEEE dd MMMM yyyy',
            { locale: it },
          )}`}
        </Text>
        <Button onClick={handleClick} variant="primary">
          Abbonati a 3.99€ al mese
        </Button>
      </Flex>
    );
  }
  if (status === 'FREE') {
    return (
      <Text textAlign="center" mb={1} fontWeight="bold" color="green">
        Abbonamento gratuito
      </Text>
    );
  }
  if (status === 'PAID') {
    return (
      <Text textAlign="center" mb={1} fontWeight="bold" color="green">
        Abbonamento mensile attivo
      </Text>
    );
  }
  if (status === 'CANCELLED') {
    return (
      <Text textAlign="center" mb={1} fontWeight="bold" color="green">
        {`Abbonamento mensile cancellato, puoi usufruire del servizio fino a ${format(
          new Date(subscriptionEnd),
          'EEEE dd MMMM yyyy',
          { locale: it },
        )}`}
      </Text>
    );
  }
  if (status === 'EXPIRED') {
    return (
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text textAlign="center" mb={3} fontWeight="bold" color="red">
          {subscriptionEnd
            ? `Abbonamento scaduto ${format(
                new Date(subscriptionEnd),
                'EEEE dd MMMM yyyy',
                { locale: it },
              )}`
            : 'Periodo di prova scaduto'}
        </Text>
        <Button onClick={handleClick} variant="primary">
          Riattiva a 3.99€ al mese
        </Button>
      </Flex>
    );
  }
  return null;
}

export default Subscription;
