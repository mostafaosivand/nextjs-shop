import { OrderDetailsContent } from './order-details-content';
import { formatAddress } from '@utils/format-address';
import OrderStatus from './order-status';
import {
  DiscountPrice,
  DeliveryFee,
  TotalPrice,
  SubTotalPrice,
} from '@components/order/price';

import { useUI } from '@contexts/ui.context';

const OrderDrawer: React.FC = () => {
  const { data, closeDrawer } = useUI();

  const onClose = () => {
    return closeDrawer();
  };

  let { shipping_address } = data;

  return (
    <>
      {data !== '' && (
        <>
          <div className="p-8">
            <h2 className="text-xl font-semibold mb-8">جزئیات سفارش</h2>
            <div className="text-[14px] opacity-70 mb-3 text-skin-base">
              آدرس تحویل
            </div>
            <div className="rounded border border-solid min-h-[90px] bg-skin-two p-4 border-skin-two text-[12px] md:text-[14px]">
              <p className="text-skin-base opacity-70">
                {formatAddress(shipping_address)}
              </p>
            </div>
            <OrderStatus status={data?.status?.serial} />
            <div className="grid grid-cols-12 bg-skin-two py-3 rounded-[3px] text-black text-[12px] md:text-[14px]">
              <div className="col-span-2 opacity-50"></div>
              <div className="col-span-5 opacity-50">کالا</div>
              <div className="col-span-3 opacity-50 md:text-start text-center">
                تعداد
              </div>
              <div className="col-span-2 opacity-50">قیمت</div>
            </div>
            {data?.products?.map((item: any, index: string) => (
              <OrderDetailsContent key={index} item={item} />
            ))}
            <div className="mt-3 text-end">
              <div className="text-black inline-flex flex-col text-[12px] md:text-[14px]">
                <div className="mb-2 pb-1 border-b border-skin-base ps-20">
                  <p className="flex justify-between mb-1">
                    <span className="me-8">جمع</span>
                    <span className="font-medium">
                      <SubTotalPrice items={data?.products} />
                    </span>
                  </p>
                  {typeof data?.discount === 'number' && (
                    <p className="flex justify-between mb-2">
                      <span className="me-8">تخفیف</span>
                      <span className="font-medium">
                        <DiscountPrice discount={data?.discount} />
                      </span>
                    </p>
                  )}
                  {typeof data?.delivery_fee === 'number' && (
                    <p className="flex justify-between mb-2">
                      <span className="me-8">هزینه ارسال</span>
                      <span className="font-medium">
                        <DeliveryFee delivery={data?.delivery_fee} />
                      </span>
                    </p>
                  )}
                </div>
                <p className="flex justify-between ps-20 mb-2">
                  <span className="me-8">جمع کل</span>
                  <span className="font-medium">
                    <TotalPrice items={data} />
                  </span>
                </p>
              </div>
            </div>
            <div className="text-end mt-12">
              <span
                onClick={onClose}
                className="py-3 px-5 cursor-pointer inline-block text-[12px] md:text-[14px] text-white font-medium bg-[#F35C5C] rounded border border-solid border-[#F35C5C]  hover:bg-white hover:text-black hover:border-[#DEE5EA] transition-all capitalize"
              >
                لغو سفارش
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDrawer;
