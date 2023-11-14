import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';

interface RatingContextProps {
  ratings: Record<string, number>;
  setRating: (productId: string, newRating: number) => void;
  reviewText: string[];
  setReviewText: Dispatch<SetStateAction<string[]>>;
  commentId: number[];
  setCommentId: Dispatch<SetStateAction<number[]>>;
}

const RatingContext = createContext<RatingContextProps | undefined>(undefined);

export const RatingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [reviewText, setReviewText] = useState<string[]>([]);
  const [commentId, setCommentId] = useState<number[]>([]);
  

  const setRating = (productId: string, newRating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: newRating,
    }));
  };

  return (
    <RatingContext.Provider value={{ ratings, setRating, reviewText, setReviewText, commentId, setCommentId }}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRating = () => {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error('useRating must be used within a RatingProvider');
  }

  return context;
};
