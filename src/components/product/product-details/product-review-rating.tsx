import type { FC } from 'react';
import { useTranslation } from 'next-i18next';
import ReviewCard from '@components/cards/review-card';
import ReviewForm from '@components/common/form/review-form';

const data = [
  {
    id: 1,
    rating: 4,
    title: 'لورم ایپسوم متن ساختگی با تولید ',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    author: 'مصطفی اسیوند',
  },
  {
    id: 2,
    rating: 5,
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    author: 'مصطفی اسیوند',
  },
  {
    id: 3,
    rating: 3,
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
    author: 'مصطفی اسیوند',
  },
];

const ProductReviewRating: FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className="lg:flex">
      <div className="pt-2">
        {data?.map((item) => (
          <ReviewCard item={item} key={`review-key-${item.id}`} />
        ))}
      </div>
      <ReviewForm className="lg:w-[500px] xl:w-[540px] 2xl:w-[600px] 3xl:w-[730px] lg:ps-10 xl:ps-14 3xl:ps-20 flex-shrink-0 pt-10" />
    </div>
  );
};

export default ProductReviewRating;
