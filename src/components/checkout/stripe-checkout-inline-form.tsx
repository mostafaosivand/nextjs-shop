import StripePaymentForm from '@components/common/form/stripe-inline-form';
import { useCart } from '@contexts/cart/cart.context';
import { useTranslation } from 'next-i18next';
import React from 'react';

const StripeCheckoutInlineForm = () => {
  const { t } = useTranslation();
  const { total } = useCart();
  return (
    <p>پرداخت از طریق درگاه پرداخت</p>
  );
};

export default StripeCheckoutInlineForm;
