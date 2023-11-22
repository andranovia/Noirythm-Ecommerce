import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axiosInstance from '@/utils/api';
import AuthCard from '@/components/Auth/AuthCard';
import ApplicationLogo from '@/components/logo/AplicationLogo';
import AuthInputError from '@/components/Auth/AuthInputError';
import AuthLabel from '@/components/Auth/AuthLabel';
import AuthInput from '@/components/Auth/AuthInput';
import ButtonPrimary from '@/components/button/ButtonPrimary';

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        router.push('/')
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
        <form
          onSubmit={(e) => {
            loginAction(e);
          }}
        >
          {Object.keys(validationErrors).length != 0 && (
            <AuthInputError messages={validationErrors} className="mt-2" />
          )}

          <div className="mb-3">
            <AuthLabel htmlFor="email" className="form-label">
              Email address
            </AuthLabel>
            <AuthInput
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
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
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2">
            <ButtonPrimary
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Login
            </ButtonPrimary>
            <p className="text-center mt-8">
              Don't have account?{' '}
              <Link className="text-green-500" href="/register">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </AuthCard>
    </div>
  );
}

export default Login;
