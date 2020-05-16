import React from 'react';
import { addDays, format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Text } from 'rebass';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_Qf10DlLrzLdKiHxg7SaxXEIk00UIXiiPXU');

function SubscriptionType({
  type,
  subscriptionEnds,
  createdAt,
  totalRestaurants,
}) {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        { price: 'prod_HI4ncc9PEyonK4', quantity: totalRestaurants },
      ],
      mode: 'subscription',
      successUrl: `${window.location.origin}/payment_success`,
      cancelUrl: `${window.location.origin}/payment_cancel`,
    });
  };
  if (type === 'TRIAL') {
    return (
      <Text textAlign="center" mb={1} fontWeight="bold" color="orange">
        {`Periodo di prova gratuito fino a ${format(
          addDays(new Date(createdAt), 7),
          'EEEE dd MMMM yyyy',
          { locale: it },
        )}`}
      </Text>
    );
  }
  if (type === 'FREE') {
    return (
      <Text textAlign="center" mb={1} fontWeight="bold" color="green">
        Abbonamento gratuito
      </Text>
    );
  }
  if (type === 'PAID') {
    return (
      <Text textAlign="center" mb={1} fontWeight="bold" color="green">
        Abbonamento mensile al costo di 5€
      </Text>
    );
  }
  if (type === 'EXPIRED') {
    return (
      <Text textAlign="center" mb={1} fontWeight="bold" color="red">
        {`Abbonamento scaduto ${format(
          addDays(new Date(subscriptionEnds), 7),
          'EEEE dd MMMM yyyy',
          { locale: it },
        )}`}
      </Text>
    );
  }
  return null;
}

export default SubscriptionType;
