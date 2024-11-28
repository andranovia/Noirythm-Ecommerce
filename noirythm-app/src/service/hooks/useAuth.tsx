"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getUser } from "../methods/getUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  postUserLogin,
  postUserRegister,
  postUserlogout,
} from "@/service/methods/mutateUser";

export interface ValidationErrors {
  name?: string[];
  email?: string[];
  password?: string[];
  general?: any;
}

interface useAuthProps {
  registerData?: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  loginData?: {
    email: string;
    password: string;
  };
}

export const useAuth = ({ registerData, loginData }: useAuthProps = {}) => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const router = useRouter();

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  const { mutateAsync: registerAction } = useMutation({
    mutationFn: () =>
      postUserRegister({
        postUserRegisterData: registerData,
        setValidationErrors,
      }),
    onSuccess: (success: boolean) => {
      if (success) {
        router.push("/auth/login");
      } else {
        console.log("Registration failed");
      }
    },
  });

  const { mutateAsync: loginAction } = useMutation({
    mutationFn: () =>
      postUserLogin({ postUserLoginData: loginData, setValidationErrors }),
    onSuccess: (success: boolean) => {
      if (success) {
        router.push("/");
      } else {
        console.log("Login failed");
      }
    },
  });

  const { mutateAsync: logoutAction } = useMutation({
    mutationFn: () => postUserlogout(),
    onSuccess: (success: boolean) => {
      if (success) {
        router.push("/auth/login");
      } else {
        console.log("Logout failed");
      }
    },
  });

  return {
    registerAction,
    loginAction,
    logoutAction,
    user,
    validationErrors,
  };
};
