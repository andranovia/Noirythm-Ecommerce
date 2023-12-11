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
    <>
      <div
        className={
          desc
            ? `rounded-lg flex flex-col lg:w-full mb-10 h-full items-stretch  bg-white shadow-md`
            : `shadow-none`
        }
      >
        {loading ? (
          <>
            <div className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
              <div className={desc ? "flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-500" : 'w-20 my-4'  }>
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div
            className={
              className
                ? `flex-shrink-0 ${className} `
                : `h-[20vh] w-[20vh] lg:w-[40vh] lg:h-[40vh]`
            }
          >
            <Image
              src={item.product_image}
              alt={item.product_name}
              width={260}
              height={260}
              className="w-full h-full object-cover flex rounded-lg "
            />
          </div>
        )}
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
            {isValidArrayLength(roundedRating) && (
              <>
                {[...Array(roundedRating)].map((_, index) => (
                  <FaStar key={index} size={15} color="yellow" />
                ))}
                {[...Array(5 - roundedRating)].map((_, index) => (
                  <FaStar key={index + roundedRating} size={15} color="grey" />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
function isValidArrayLength(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}

export default ProductItemCard;
