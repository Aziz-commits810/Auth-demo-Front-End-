import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface SignupFormData {
  email: string;
  name: string;
  password: string;
}

export const SignupForm: React.FC = () => {
  const { register } = useAuth();
  const { register: formRegister, handleSubmit, formState: { errors } } = useForm<SignupFormData>();

  const onSubmit = async (data: SignupFormData) => {
    try {
      await register(data.email, data.name, data.password);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-6">Create Your Account</h2>

      <div>
        <Input
          label="Full Name"
          {...formRegister('name', { required: 'Name is required' })}
          error={errors.name?.message}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
      </div>

      <div>
        <Input
          label="Email Address"
          type="email"
          {...formRegister('email', { required: 'Email is required' })}
          error={errors.email?.message}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
      </div>

      <div>
        <Input
          label="Password"
          type="password"
          {...formRegister('password', { 
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
          error={errors.password?.message}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
      </div>

      <Button 
        type="submit" 
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sign Up
      </Button>
    </form>
  );
};
