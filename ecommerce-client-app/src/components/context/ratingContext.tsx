import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface RatingData {
  ratings: Record<string, number>;
  reviewText: string[];
  commentId: number[];
  averageRating: Record<string, number>;
  productId: string;
}

interface RatingContextProps {
  ratingData: RatingData;
  setRatingData: React.Dispatch<React.SetStateAction<RatingData>>;
}

const RatingContext = createContext<RatingContextProps | undefined>(undefined);

export const RatingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ratingData, setRatingData] = useState<RatingData>({
    ratings: {},
    reviewText: [],
    commentId: [],
    averageRating: {},
    productId: '',
  });

 
  const contextValue: RatingContextProps = {
    ratingData,
    setRatingData,
  };
  

  return (
    <RatingContext.Provider value={contextValue}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRating = (): RatingContextProps => {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error('useRating must be used within a RatingProvider');
  }

  return context;
};
