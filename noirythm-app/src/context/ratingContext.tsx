
'use client'

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useMemo,
  } from 'react';
  
  interface RatingData {
    ratings: number[];
    reviewText: string[];
    commentId: number[];
    averageRating: Record<string, number>;
    productId: string;
    userId: number[];
  }
  
  interface RatingContextProps {
    ratingData: RatingData;
    setRatingData: React.Dispatch<React.SetStateAction<RatingData>>;
    isChangesSaved: boolean;
    setIsChangesSaved: Dispatch<SetStateAction<boolean>>;
  }
  
  const RatingContext = createContext<RatingContextProps | undefined>(undefined);
  
  export const RatingProvider: React.FC<{ children: ReactNode }> = React.memo(
    ({ children }) => {
      const [ratingData, setRatingData] = useState<RatingData>({
        ratings: [],
        reviewText: [],
        commentId: [],
        averageRating: {},
        productId: '',
        userId: [],
      });
      const [isChangesSaved, setIsChangesSaved] = useState(false);
      const memoizedRatingData = useMemo(() => ratingData, [ratingData]);
  
      const contextValue: RatingContextProps = useMemo(() => {
        return {
          ratingData: memoizedRatingData,
          setRatingData,
          isChangesSaved,
          setIsChangesSaved: (value) => {
            setIsChangesSaved(value);
            setTimeout(() => {
              setIsChangesSaved(false);
            }, 3000);
          },
        };
      }, [memoizedRatingData, isChangesSaved]);
  
      return (
        <RatingContext.Provider value={contextValue}>
          {children}
        </RatingContext.Provider>
      );
    }
  );
  RatingProvider.displayName = 'RatingProvider';

  
  export const useRating = (): RatingContextProps => {
    const context = useContext(RatingContext);
  
    if (!context) {
      throw new Error('useRating must be used within a RatingProvider');
    }
  
    return context;
  };
  