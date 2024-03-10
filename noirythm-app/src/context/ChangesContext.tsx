"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

interface ChangesContextProps {
  isChangesSaved: boolean;
  setIsChangesSaved: Dispatch<SetStateAction<boolean>>;
}

const ChangesContext = createContext<ChangesContextProps | undefined>(
  undefined
);

export const ChangesProvider: React.FC<{ children: ReactNode }> = React.memo(
  ({ children }) => {
    const [isChangesSaved, setIsChangesSaved] = useState(false);

    const contextValue: ChangesContextProps = useMemo(() => {
      return {
        isChangesSaved,
        setIsChangesSaved: (value) => {
          setIsChangesSaved(value);
          setTimeout(() => {
            setIsChangesSaved(false);
          }, 3000);
        },
      };
    }, [isChangesSaved]);

    return (
      <ChangesContext.Provider value={contextValue}>
        {children}
      </ChangesContext.Provider>
    );
  }
);

ChangesProvider.displayName = "ChangesProvider";

export const useChanges = (): ChangesContextProps => {
  const context = useContext(ChangesContext);

  if (!context) {
    throw new Error("useChanges must be used within a RatingProvider");
  }

  return context;
};
