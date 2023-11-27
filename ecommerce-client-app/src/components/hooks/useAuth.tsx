import axiosInstance from "@/utils/api";
import { useRouter } from "next/router";
import React from "react"
import { useState } from "react";


interface ValidationErrors {
    name?: string[];
    email?: string[];
    password?: string[];
  }

export const useAuth = () => {

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
      {}
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
  
  
    const registerAction = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      let payload = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirmPassword,
      };
      axiosInstance
        .post('/api/register', payload)
        .then((r) => {
          setIsSubmitting(false);
          localStorage.setItem('token', r.data.token);
          router.push('/');
        })
        .catch((e) => {
          setIsSubmitting(false);
          if (e.response.data.errors != undefined) {
            setValidationErrors(e.response.data.errors);
          }
        });
    };

    const loginAction = (e: React.FormEvent) => {
        setValidationErrors({});
        e.preventDefault();
        setIsSubmitting(true);
        let payload = {
          email: email,
          password: password,
        };
    
        axiosInstance
          .post('/api/login', payload)
          .then(({ data }) => {
            setIsSubmitting(false);
            const accessToken = data.data.token;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem(
              'user',
              JSON.stringify({
                name: data.data.name,
                email: data['email'],
              })
            );
            // router.push('/')
          })
          .catch((e) => {
            setIsSubmitting(false);
            if (e.response.data.errors != undefined) {
              setValidationErrors(e.response.data.errors);
            }
            if (e.response.data.error != undefined) {
              setValidationErrors(e.response.data.error);
            }
          });
      };
    

    return {registerAction, loginAction, name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, isSubmitting, validationErrors}

}