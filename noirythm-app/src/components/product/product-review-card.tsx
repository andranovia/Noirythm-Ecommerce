'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRating } from '@/context/ratingContext';
import { useAuth } from '@/hooks/useAuth';
import ProductInfoReviewEdit from './product-info-review-edit';
import Avatar from '../user/avatar';

const ProductReviewCard = ({ index, review, handleDeleteComments }: any) => {
  const { ratingData } = useRating();
  const { ratings, userId, commentId } = ratingData;
  const [isEditing, setIsEditing] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { user } = useAuth();
  const [selectedCommentIndex, setSelectedCommentIndex] = useState<
    number | null
  >(null);

  const userIdsSet = new Set(userId);

  const handleEditComment = (index: number) => {
    setIsEditing(true);
    setSelectedCommentIndex(index);
  };

  return (
    <>
      <div
        key={index}
        className="relative p-4 sm:p-2 h-full flex flex-col justify-between rounded-md shadow-ShadowCard mt-6 sm:mt-0 w-[22rem] sm:w-[12rem]"
      >
        <div className="flex justify-between m-2 items-center mb-8">
          <div className="flex items-center justify-center gap-4 ">
            <div className="w-6">
              <Avatar
                imgSrc="https://img.icons8.com/ios-filled/50/4D4D4D/user-male-circle.png"
                height={20}
                width={20}
              />
            </div>
            <p className="text-gray-600 font-bold">User Id: {userId[index]}</p>
          </div>
          <div className="">
            <button onClick={() => setIsShowMenu(true)}>
              <Image
                src={'https://img.icons8.com/material-two-tone/24/menu-2.png'}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        <div className="flex justify-between p-2">
          <div className="flex justify-center gap-4">
            <div className="flex justify-center gap-2">
              <FaStar size={20} color={'yellow'} />
              <p>{ratings[index]}</p>
            </div>
            <p className="max-w-[10rem]">{review}</p>
          </div>
        </div>
      </div>

      {isEditing && selectedCommentIndex === index ? (
        <ProductInfoReviewEdit
          commentId={commentId[index]}
          review={review}
          setIsEditing={setIsEditing}
          ratingsValues={ratings[index]}
        />
      ) : null}
      {isShowMenu && (
        <>
          <div className="fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-end items-center">
            <div className="bg-white w-screen h-fit p-4 absolute  ">
              <button onClick={() => setIsShowMenu(false)}>
                <Image
                  src={'https://img.icons8.com/ios/50/multiply.png'}
                  alt="cancel"
                  height={34}
                  width={34}
                  className="opacity-70"
                />
              </button>
              <div className="flex flex-col m-2 mt-4 gap-2 font-bold text-md text-gray-800 ">
                {userIdsSet.has(user?.id) ? (
                  <>
                    <button
                      onClick={() => handleDeleteComments(commentId[index])}
                    >
                      <p className=" text-start">Delete Review</p>
                    </button>
                    <button onClick={() => handleEditComment(index)}>
                      <p className=" text-start">Edit Review</p>
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductReviewCard;
