import { useOrderQuery } from '@framework/order/get-order';
import usePrice from '@framework/product/use-price';
import { OrderItem } from '@framework/types';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Heading from '@components/ui/heading';
const OrderItemCard = ({ product }: { product: OrderItem }) => {
  const { price: itemTotal } = usePrice({
    amount: product.price * product.quantity,
    currencyCode: 'USD',
  });
  return (
    <tr
      className="border-b font-normal border-skin-base last:border-b-0"
      key={product.id}
    >
      <td className="p-4">
        {product.name} * {product.quantity}
      </td>
      <td className="p-4">{itemTotal}</td>
    </tr>
  );
};
const OrderDetails: React.FC<{ className?: string }> = ({
  className = 'pt-10 lg:pt-12',
}) => {
  const { t } = useTranslation('common');
  const {
    query: { id },
  } = useRouter();
  const { data: order, isLoading } = useOrderQuery(id?.toString()!);
  const { price: subtotal } = usePrice(
    order && {
      amount: order.total,
      currencyCode: 'USD',
    }
  );
  const { price: total } = usePrice(
    order && {
      amount: order.shipping_fee
        ? order.total + order.shipping_fee
        : order.total,
      currencyCode: 'USD',
    }
  );
  const { price: shipping } = usePrice(
    order && {
      amount: order.shipping_fee,
      currencyCode: 'USD',
    }
  );
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={className}>
      <Heading variant="heading" className="mb-6 xl:mb-7">
        {t('text-order-details')}:
      </Heading>
      <table className="w-full text-skin-base font-semibold text-sm lg:text-base">
        <thead>
          <tr>
            <th className="bg-skin-secondary p-4 text-start first:rounded-ts-md w-1/2">
              {t('text-product')}
            </th>
            <th className="bg-skin-secondary p-4 text-start last:rounded-te-md w-1/2">
              {t('text-total')}
            </th>
          </tr>
        </thead>
        <tbody>
          {order?.products.map((product, index) => (
            <OrderItemCard key={index} product={product} />
          ))}
        </tbody>
        <tfoot>
          <tr className="odd:bg-skin-secondary">
            <td className="p-4 italic">{t('text-sub-total')}:</td>
            <td className="p-4">{subtotal}</td>
          </tr>
          <tr className="odd:bg-skin-secondary">
            <td className="p-4 italic">{t('text-shipping')}:</td>
            <td className="p-4">
              {shipping}
              <span className="text-[13px] font-normal ps-1.5 inline-block">
                پرداخت آنلاین
              </span>
            </td>
          </tr>
          <tr className="odd:bg-skin-secondary">
            <td className="p-4 italic">{t('text-payment-method')}:</td>
            <td className="p-4">{order?.payment_gateway}</td>
          </tr>
          <tr className="odd:bg-skin-secondary">
            <td className="p-4 italic">{t('text-total')}:</td>
            <td className="p-4">{total}</td>
          </tr>
          <tr className="odd:bg-skin-secondary">
            <td className="p-4 italic">{t('text-note')}:</td>
            <td className="p-4">{t('text-new-order')}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderDetails;
