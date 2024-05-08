"use client";

import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import ApplicationLogo from "@/components/logo/ApplicationLogo";
import AuthInputError from "@/components/auth/AuthInputError";
import AuthLabel from "@/components/auth/AuthLabel";
import AuthInput from "@/components/auth/AuthInput";
import ButtonPrimary from "@/components/button/button-primary";
import { useAuth } from "@/hooks/useAuth";

function Login() {
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const { loginAction, validationErrors } = useAuth({
    loginData: userLoginData,
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <AuthCard
        logo={
          <Link href="/">
            <div className="bg-white  rounded-full px-10 flex justify-center items-center">
              <ApplicationLogo className="w-16 h-14 rounded-full p-2  fill-current text-gray-500 " />
              <h2 className="text-2xl font-bold text-gray-800">Noirythm</h2>
            </div>
          </Link>
        }
      >
        <h5 className="text-2xl font-bold text-gray-800 mb-8">Sign in</h5>
        <div
         
        >
           

          <div className="mb-3">
            <AuthLabel htmlFor="email" className="form-label">
              Email address
            </AuthLabel>
            <AuthInput
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userLoginData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
             {validationErrors && validationErrors.email != undefined && (
              <AuthInputError
                messages={validationErrors.email}
                className="mt-2"
              />
            )}
          </div>
          <div className="mb-3">
            <AuthLabel htmlFor="password" className="form-label">
              Password
            </AuthLabel>
            <AuthInput
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={userLoginData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
            {validationErrors && validationErrors.password != undefined && (
              <AuthInputError
                messages={validationErrors.password}
                className="mt-2"
              />
            )}
          </div>
          <div>
            <ButtonPrimary
              onClick={() => loginAction()}
            >
              Login
            </ButtonPrimary>
            <p className="text-center mt-8">
              Dont have account?{" "}
              <Link className="text-green-500" href="/auth/register">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </AuthCard>
    </div>
  );
}

export default Login;
