import axiosInstance from "../utils/axiosInstance";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { getUser } from "../utils/getUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  postUserLogin,
  postUserRegister,
  postUserlogout,
} from "@/utils/mutateUser";

interface ValidationErrors {
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
    confirmPassword: string;
  };
  loginData?: {
    email: string;
    password: string;
  };
}

export const useAuth = ({ registerData, loginData }: useAuthProps = {}) => {
  const router = useRouter();
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(accessToken),
  });

  const { mutateAsync: registerAction } = useMutation({
    mutationFn: () => postUserRegister({ postUserRegisterData: registerData }),
  });

  const { mutateAsync: loginAction } = useMutation({
    mutationFn: () => postUserLogin({ postUserLoginData: loginData }),
  });

  const { mutateAsync: logoutAction } = useMutation({
    mutationFn: () => postUserlogout(),
  });

  return {
    registerAction,
    loginAction,
    logoutAction,
    user,
    isSubmitting,
    validationErrors,
  };
};
