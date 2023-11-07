import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AuthCard from '@/components/Auth/AuthCard';
import ApplicationLogo from '@/components/logo/AplicationLogo';
import Link from 'next/link';
import AuthLabel from '@/components/Auth/AuthLabel';
import AuthInput from '@/components/Auth/AuthInput';
import AuthInputError from '@/components/Auth/AuthInputError';
import axiosInstance from '@/utils/api';
import ButtonPrimary from '@/components/button/ButtonPrimary';

interface ValidationErrors {
  name?: string[];
  email?: string[];
  password?: string[];
}

function Register() {
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

  return (
    <div>
      <AuthCard
        logo={
          <Link href="/">
            <div className='bg-white  rounded-full px-10 flex justify-center items-center'>
            <ApplicationLogo className="w-16 h-14 rounded-full p-2  fill-current text-gray-500 " />
            <h2 className='text-2xl font-bold text-gray-800'>Noirythm</h2>
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
            {validationErrors.name != undefined && (
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
            {validationErrors.email != undefined && (
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
            {validationErrors.password != undefined && (
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
              Have already an account ? <Link className='text-green-500' href="/auth/login">Login here</Link>
            </p>
          </div>
        </form>
      </AuthCard>
    </div>
  );
}

export default Register;
