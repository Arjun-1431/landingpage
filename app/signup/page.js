'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/signup', {
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
          title: 'Signed up!',
          text: data.message,
          timer: 1500,
          showConfirmButton: false,
        });

        setTimeout(() => {
          router.push('http://localhost:3000/login');
        }, 1600);

        setForm({ name: '', email: '', password: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.error || 'Signup failed',
        });
      }
    } catch (err) {
      console.error('Signup error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-3xl font-bold">Create your account</p>
          <p className="mt-2 text-left text-gray-500">
            Let's get started by creating your account.
          </p>

          <button className="mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
            Sign up with Google
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
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full flex-1 appearance-none bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full flex-1 appearance-none bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                  required
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
                  className="w-full flex-1 appearance-none bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="pointer-events-none relative hidden h-screen select-none bg-gray-800 md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-8 text-3xl font-semibold leading-10">
            We help you build websites 10x faster with modern tools and zero
            hassle.
          </p>
          <p className="mb-4 text-3xl font-semibold">Jane Doe</p>
          <p className="">Co-Founder, DevSpark</p>
          <p className="mb-7 text-sm opacity-70">SaaS Web Platform</p>
        </div>
      </div>
    </div>
  );
}
