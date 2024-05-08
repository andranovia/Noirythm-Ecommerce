"use client";

import React, { ChangeEvent, useState } from "react";
import AuthCard from "@/components/auth/AuthCard";
import ApplicationLogo from "@/components/logo/ApplicationLogo";
import Link from "next/link";
import AuthLabel from "@/components/auth/AuthLabel";
import AuthInput from "@/components/auth/AuthInput";
import AuthInputError from "@/components/auth/AuthInputError";
import ButtonPrimary from "@/components/button/button-primary";
import { useAuth } from "@/hooks/useAuth";

interface registerData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

function Register() {
  const [registerData, setRegisterData] = useState<registerData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { registerAction, validationErrors } = useAuth({
    registerData: registerData,
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
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
        <h5 className="text-2xl font-bold text-gray-800 mb-8">Register</h5>

        <div>
          <div className="mb-3">
            <AuthLabel htmlFor="name" className="form-label">
              Name
            </AuthLabel>
            <AuthInput
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={registerData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
            {validationErrors && validationErrors.name != undefined && (
              <AuthInputError
                messages={validationErrors.name}
                
              />
            )}
          </div>
          <div className="mb-3">
            <AuthLabel htmlFor="email" className="form-label">
              Email address
            </AuthLabel>
            <AuthInput
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={registerData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
            {validationErrors && validationErrors.email != undefined && (
              <AuthInputError
                messages={validationErrors.email}
                
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
              value={registerData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
             {validationErrors && validationErrors.password != undefined && (
              <AuthInputError
                messages={validationErrors.password}
                
              />
            )}
          </div>
          <div className="mb-3">
            <AuthLabel htmlFor="confirm_password" className="form-label">
              Confirm Password
            </AuthLabel>
            <AuthInput
              type="password"
              className="form-control"
              id="password_confirmation"
              name="password_confirmation"
              value={registerData.password_confirmation}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                handleOnChange(e);
              }}
            />
          </div>
          <div>
            <ButtonPrimary onClick={() => registerAction()}>
              Register Now
            </ButtonPrimary>
            <p className="text-center mt-8">
              Have already an account ?{" "}
              <Link className="text-green-500" href="/auth/login">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </AuthCard>
    </div>
  );
}

export default Register;
