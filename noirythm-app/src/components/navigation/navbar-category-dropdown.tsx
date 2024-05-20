import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarCategoryDropdownProps = {
  setIsCategoryDropdownOpen: Dispatch<SetStateAction<boolean>>;
  isCategoryDropdownOpen: boolean;
};
export default function NavbarCategoryDropdown({
  setIsCategoryDropdownOpen,
  isCategoryDropdownOpen,
}: NavbarCategoryDropdownProps) {
  const dropdownData = [
    {
      name: "all",
      img: "https://img.icons8.com/ios-filled/50/192655/show-all-views.png",
    },
    { name: "cloth", img: "https://img.icons8.com/ios/50/192655/clothes.png" },
    {
      name: "trouser",
      img: "https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/192655/external-clothes-clothes-accessories-outline-bartama-outline-64-bartama-graphic-2.png",
    },
    { name: "shoe", img: "https://img.icons8.com/ios/50/192655/sneakers.png" },
  ];

  const handleDropdownEnter = () => {
    setIsCategoryDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsCategoryDropdownOpen(false);
  };

  return (
    <div
      className={`fixed transition-all ${
        isCategoryDropdownOpen
          ? "translate-y-0 pointer-events-auto opacity-100"
          : "translate-y-10 pointer-events-none opacity-0"
      } top-10 -ml-14 bg-white   rounded-lg pt-6 p-4 w-40`}
      onMouseEnter={handleDropdownEnter}
      onMouseLeave={handleDropdownLeave}
    >
      <div className="h-full overflow-y-auto">
        <nav className="px-2 ">
          {dropdownData.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                href={'category/' + item.name}
                className={`capitalize transition-opacity opacity-40 hover:opacity-100  text-gray-800  flex items-center gap-4 px-2 py-2 text-base leading-6 font-medium  `}
              >
                <Image src={item.img} alt="show-cloth" height={20} width={20} />
                {item.name + "s"}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
