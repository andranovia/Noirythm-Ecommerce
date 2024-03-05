import React from 'react';
import AuthCard from '@/components/auth/AuthCard';
import ApplicationLogo from '@/components/Logo/AplicationLogo';
import Link from 'next/link';
import AuthLabel from '@/components/auth/AuthLabel';
import AuthInput from '@/components/auth/AuthInput';
import AuthInputError from '@/components/auth/AuthInputError';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import { useAuth } from '@/hooks/useAuth';

function Register() {
  const {
    registerAction,
    name,
    setName,
    validationErrors,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
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
        <h5 className="text-2xl font-bold text-gray-800 mb-8">Register</h5>

        <form onSubmit={(e) => registerAction(e)}>
          <div className="mb-3">
            <AuthLabel htmlFor="name" className="form-label">
              Name
            </AuthLabel>
            <AuthInput
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
            {validationErrors && validationErrors.name != undefined && (
              <AuthInputError
                messages={validationErrors.name}
                className="mt-2"
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
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
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
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            {validationErrors && validationErrors.password != undefined && (
              <AuthInputError
                messages={validationErrors.password}
                className="mt-2"
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
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <ButtonPrimary
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Register Now
            </ButtonPrimary>
            <p className="text-center mt-8">
              Have already an account ?{' '}
              <Link className="text-green-500" href="/auth/login">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </AuthCard>
    </div>
  );
}

export default Register;
