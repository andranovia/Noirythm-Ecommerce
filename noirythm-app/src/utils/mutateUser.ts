import { Dispatch, SetStateAction } from "react";
import axiosInstance from "./axiosInstance";
import { ValidationErrors } from "@/hooks/useAuth";

interface postUserRegisterProps {
  setValidationErrors: Dispatch<SetStateAction<ValidationErrors>>;
  postUserRegisterData?: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
}

interface postUserLoginProps {
  setValidationErrors: Dispatch<SetStateAction<ValidationErrors>>;
  postUserLoginData?: {
    email: string;
    password: string;
  };
}

export const postUserRegister = async ({
  postUserRegisterData,
  setValidationErrors,
}: postUserRegisterProps) => {
  try {
    const payload = {
      name: postUserRegisterData?.name,
      email: postUserRegisterData?.email,
      password: postUserRegisterData?.password,
      password_confirmation: postUserRegisterData?.password_confirmation,
    };

    const response = await axiosInstance.post("/api/register", payload);
    setValidationErrors(response.data.errors);

    if (response.data.errors === undefined) {
      const { token, refresh_token } = response.data.data;
      window.localStorage.setItem('access_token', token);
      window.localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: response.data.name, email: response.data.email })
      );
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    if (error.response) {
      const { data, status } = error.response;
      console.error(`Server responded with ${status}.`, data);
      if (data.errors) {
        setValidationErrors(data.errors);
      }
    } else if (error.request) {
      console.error("Request made but no response received");
    } else {
      console.error("Error setting up request:", error.message);
    }
    return false;
  }
};

export const postUserLogin = async ({
  postUserLoginData,
  setValidationErrors,
}: postUserLoginProps) => {
  const payload = {
    email: postUserLoginData?.email,
    password: postUserLoginData?.password,
  };
  try {
    const response = await axiosInstance.post("/api/login", payload);

    setValidationErrors(response.data.errors);
    if (response.data.errors === undefined) {
      const { token, refresh_token } = response.data.data;
      window.localStorage.setItem('access_token', token);
      window.localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: response.data.data.name,
          email: response.data.data["email"],
        })
      );

      return true;
    }

    return false;
  } catch (error: any) {
    if (error.response) {
      const { data, status } = error.response;
      console.error(`Server responded with ${status}.`, data);
      if (data.errors) {
        setValidationErrors(data.errors);
      }
    } else if (error.request) {
      console.error("Request made but no response received");
    } else {
      console.error("Error setting up request:", error.message);
    }
    return false;
  }
};

export const postUserlogout = async () => {

  try {
    const response = await axiosInstance.post("/api/logout", null);
    if (response.data.success) {
      localStorage.removeItem("user");
      return true;
    } else {
      console.error("Logout failed");
      return false;
    }
    
  } catch (error) {
    console.error("Error during logout:", error);
    return false;
  }
};
