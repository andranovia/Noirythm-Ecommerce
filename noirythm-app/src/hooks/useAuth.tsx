
import axiosInstance from '../utils/axiosInstance';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';
import { getUser } from '../utils/getUser';
import { useQuery } from '@tanstack/react-query';

interface ValidationErrors {
  name?: string[];
  email?: string[];
  password?: string[];
  general?: any;
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


  const accessToken = localStorage.getItem('accessToken');
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(accessToken),
  });

  

  const registerAction = React.useCallback(
    (e: React.FormEvent) => {
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
          setValidationErrors(r.data.errors);
          router.push('/auth/login');
          localStorage.setItem(
            'user',
            JSON.stringify({ name: r.data.name, email: r.data.email })
          );
        })
        .catch(() => {
          setIsSubmitting(false);
        });
    },
    [name, email, password, confirmPassword, router]
  );

  const loginAction = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      let payload = {
        email: email,
        password: password,
      };

      axiosInstance
        .post('/api/login', payload)
        .then(({ data }) => {
          setValidationErrors(data.errors);
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
          router.push('/');
        })

        .catch((Error) => {
          setIsSubmitting(false);
          console.log(Error);
          if (Error.response && Error.response.status === 422) {
            setValidationErrors(Error.response.data.errors);
          } else {
            console.error('An error occurred:', Error);
          }
        });
    },
    [email, password, router]
  );

  const logoutAction = React.useCallback(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.error('Access token not found');
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    axiosInstance
      .post('/api/logout', null, { headers })
      .then((response) => {
        if (response.data.success) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
          router.push('/auth/login');
        } else {
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  }, [router]);

  return React.useMemo(
    () => ({
      registerAction,
      loginAction,
      logoutAction,
      user,
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      isSubmitting,
      validationErrors,
    }),
    [
      registerAction,
      loginAction,
      logoutAction,
      user,
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      isSubmitting,
      validationErrors,
    ]
  );
};