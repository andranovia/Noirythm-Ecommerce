import React from 'react';
import Link from 'next/link';
import AuthCard from '@/components/auth/AuthCard';
import ApplicationLogo from '@/components/logo/AplicationLogo';
import AuthInputError from '@/components/auth/AuthInputError';
import AuthLabel from '@/components/auth/AuthLabel';
import AuthInput from '@/components/auth/AuthInput';
import ButtonPrimary from '@/components/button/ButtonPrimary';
import { useAuth } from '@/components/hooks/useAuth';

function Login() {
  const {
    loginAction,
    validationErrors,
    email,
    setEmail,
    password,
    setPassword,
    isSubmitting,
  } = useAuth();

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
          {validationErrors && Object.keys(validationErrors).length !== 0 && (
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
          {validationErrors && validationErrors.email != undefined && (
            <AuthInputError
              messages={validationErrors.email}
              className="mt-2"
            />
          )}
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
            {validationErrors && validationErrors.password != undefined && (
              <AuthInputError
                messages={validationErrors.password}
                className="mt-2"
              />
            )}
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
              <Link className="text-green-500" href="/auth/register">
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
