'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          text: `Welcome, ${data.user.name}!`,
        });
        // Optional: redirect after login
        // router.push('/dashboard');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data.error || 'Invalid credentials',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-3xl font-bold">Welcome back, Olivia</p>
          <p className="mt-2 text-left text-gray-500">
            Welcome back, please enter your details.
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
            Log in with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
              or
            </div>
          </div>

          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="mb-12 flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            >
              Log in
            </button>
          </form>

          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="underline-offset-4 font-semibold text-gray-900 underline"
              >
                Sign up for free.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative hidden h-screen select-none bg-gray-800 md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-8 text-3xl font-semibold leading-10">
            We work 10x faster than our competitors and stay consistent. While
            they're bogged down with technical debt, we're releasing new
            features.
          </p>
          <p className="mb-4 text-3xl font-semibold">John Elmond</p>
          <p className="">Founder, Emogue</p>
          <p className="mb-7 text-sm opacity-70">Web Design Agency</p>
        </div>
      </div>
    </div>
  );
}
