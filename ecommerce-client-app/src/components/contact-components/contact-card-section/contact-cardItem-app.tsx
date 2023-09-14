import React from 'react';

interface ContactCardCategory {
  title: string;
  description: string;
  image: JSX.Element;
  label: string;
}

interface ContactItemProps {
  category: ContactCardCategory; 
}

const ContactCardItem: React.FC<ContactItemProps> = ({ category }) => {
  return (
    <div className="w-[8rem] h-[8rem] rounded-md border border-amber-950 sm:w-[15rem] sm:h-[12rem]">
      <div className="flex justify-center my-5 sm:my-10 ">
      {category.image && (
          <div className="custom-image">
            {React.cloneElement(category.image, {
              size: 30,
              color: '#2d180d', 
            })}
          </div>
        )}
      </div>
      <div className="flex justify-center text-center font-semibold text-amber-900 mx-10">
        <h1>{category.label}</h1>
      </div>
    </div>
  );
};

export default ContactCardItem;
