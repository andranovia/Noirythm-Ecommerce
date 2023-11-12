import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import Image from 'next/image';
import { useRating } from '../context/ratingContext';
import { FaStar } from 'react-icons/fa';

interface ProductItem {
  product_name: string;
  product_image: string;
  product_price: number;
  promo_text: string;
  id: string;
}

interface ProductItemCardProps {
  item: ProductItem;
  loading: boolean;
  className: string | {} | null;
  desc: boolean;
}

const ProductItemCard: React.FC<ProductItemCardProps> = ({
  item,
  loading,
  className,
  desc,
}) => {
  const { ratings } = useRating();

  const productRating = ratings[item.id] || 0;
  const roundedRating = Math.round(productRating);

  return (
    <div
      className={
        desc
          ? `rounded-lg flex flex-col lg:w-full h-full items-stretch  bg-white shadow-md`
          : `shadow-none`
      }
    >
      <div
        className={
          className
            ? `flex-shrink-0 ${className} `
            : `h-[20vh] w-[20vh] lg:w-[40vh] lg:h-[40vh]`
        }
      >
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#8b8b8b', '#fafafa', '#c7b1b1', '#8c7070', '#856b6b']}
          />
        ) : (
          <Image
            src={item.product_image}
            alt={item.product_name}
            width={260}
            height={260}
            className="w-full h-full object-cover flex rounded-lg "
          />
        )}
      </div>
      <div className={desc ? `text-start mt-4 ml-3 p-3 ` : `hidden`}>
        <h4 className="text-lg font-light text-black">{item.product_name}</h4>
        <p className="text-base font-bold text-black">{item.product_price}</p>
        <div
          className={
            item.promo_text
              ? `bg-gray-800 rounded-lg flex h-7 w-[6rem] my-2 p-2 flex-col justify-center`
              : ``
          }
        >
          <h2 className="font-semibold text-white">{item.promo_text}</h2>
        </div>
        <div className="flex justify-start gap-2 mt-4">
        {isValidArrayLength(roundedRating) &&
          [...Array(roundedRating)].map((_, index) => (
            <FaStar key={index} size={20} color="yellow" />
          ))}
        </div>
        <div className="my-6">
          <p className="w-fit text-sm font-bold ">
            average rating is {roundedRating} star
          </p>
        </div>
      </div>
    </div>
  );
};
function isValidArrayLength(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}

export default ProductItemCard;
