import React, { Dispatch, SetStateAction } from 'react'
import Transition from './Transition'
import Image from 'next/image'
import Link from 'next/link'
import ButtonSecondary from '@/components/Button/ButtonSecondary'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'


type navbarTransitionProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}



const NavbarTransitionMobile = ({isSidebarOpen, setIsSidebarOpen}: navbarTransitionProps) => {
    const { user } = useAuth();
    const router = useRouter();

    
  return (
    <Transition show={isSidebarOpen} appear={true}>
        <div className="fixed inset-0 flex z-40">
          <Transition
            show={isSidebarOpen}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
          >
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75" />
            </div>
          </Transition>

          <Transition
            show={isSidebarOpen}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                {isSidebarOpen && (
                  <>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                      aria-label="Close sidebar"
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              <div className="flex-shrink-0 flex items-center px-4 py-4 ">
                <Image
                  className="h-10 w-auto"
                  src="/img/logo-brand.png"
                  alt="Workflow"
                  width={120}
                  height={120}
                />
                <h2 className="font-bold text-2xl text-black px-4">Noirythm</h2>
              </div>

              <div className="h-full overflow-y-auto">
                {user ? (
                  <>
                    <div className="m-4 flex justify-between">
                      <div className="flex justify-center items-center gap-4">
                        <Image
                          src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                        <h1 className="font-bold">{user.name}</h1>
                      </div>
                      <Link href={'/profile/user'}>
                        <div className="flex justify-start items-center mr-2 ">
                          <Image
                            src="https://img.icons8.com/ios/50/settings--v1.png"
                            width={20}
                            height={20}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <Link href={'/cart/cart'}>
                      <div className="flex flex-col justify-center m-4">
                        <ButtonSecondary>
                          <div className="flex justify-center items-center gap-2">
                            <Image
                              src="https://img.icons8.com/ios/50/shopping-cart.png"
                              width={20}
                              height={20}
                              alt=""
                            />
                            <h2 className="font-semibold ">Your Cart</h2>
                          </div>
                        </ButtonSecondary>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="mx-4 my-6">
                      <div className="flex flex-col justify-center gap-4">
                        <div className="flex justify-center gap-4">
                          <ButtonPrimary>Login</ButtonPrimary>
                          <ButtonSecondary>Register</ButtonSecondary>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <nav className="px-2 ">
                  <Link
                    href="/"
                    className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md transition ease-in-out duration-150 ${
                      router.pathname === '/'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Home
                  </Link>
                  <Link
                    href="/category/All"
                    className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md transition ease-in-out duration-150 ${
                      router.pathname === '/category/All'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    Product
                  </Link>
                  <Link
                    href="/about-Us/AboutPage"
                    className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md transition ease-in-out duration-150 ${
                      router.pathname === '/about-Us/AboutPage'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                    About Us
                  </Link>
                  <Link
                    href="/contact/ContactPage"
                    className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md transition ease-in-out duration-150 ${
                      router.pathname === '/contact/ContactPage'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>

  )
}

export default NavbarTransitionMobile