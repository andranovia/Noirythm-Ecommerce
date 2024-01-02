import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from 'react';

interface RatingContextProps {
  ratings: Record<string, number>;
  setRating: Dispatch<SetStateAction<Record<string, number>>>;
  reviewText: string[];
  setReviewText: Dispatch<SetStateAction<string[]>>;
  commentId: number[];
  setCommentId: Dispatch<SetStateAction<number[]>>;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  averageRating: Record<string, number>;
  setAverageRating: Dispatch<SetStateAction<Record<string, number>>>;
  productId: string;
  setProductId: Dispatch<SetStateAction<string>>;
  updateAverageRating: (productId: string, newRating: number) => void;
}

const RatingContext = createContext<RatingContextProps | undefined>(undefined);

export const RatingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [ratings, setRating] = useState<Record<string, number>>({});
  const [reviewText, setReviewText] = useState<string[]>([]);
  const [commentId, setCommentId] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [averageRating, setAverageRating] = useState<Record<string, number>>({});
  const [productId, setProductId] = useState('');
  
  const updateAverageRating = (productId: string, newRating: number) => {
    setAverageRating((prevRatings) => ({
      ...prevRatings,
      [productId]: newRating,
    }));
  };

  
  return (
    <RatingContext.Provider value={{productId, setProductId, ratings, setRating, updateAverageRating, averageRating, setAverageRating, reviewText, setReviewText, commentId, setCommentId, isEditing, setIsEditing}}>
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
