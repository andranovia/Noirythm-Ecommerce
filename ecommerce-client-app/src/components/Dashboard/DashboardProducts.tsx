import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';

function DashboardProducts() {
  return (
    <div className=" mt-20 ">
      <div className="">
        <div className="flex justify-start gap-4 items-center">
          <p className="font-bold text-2xl">Dashboard</p>
          <p className="text-gray-500">/ products</p>
        </div>
        <div className="mt-14 w-screen flex justify-start items-center gap-20">
          <form className="w-2/4 flex justify-start items-center gap-4">
            <div className="w-3/4">
              <label
                form="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:placeholder-gray-400 "
                  placeholder="Search Products  "
                  required
                />
              </div>
            </div>
            <div className="text-white ">
              <ButtonPrimary type="submit">Search</ButtonPrimary>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default DashboardProducts;
