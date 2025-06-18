'use client';
import { use } from 'react';

export default function BlogDetails({ params }) {
  const { slug } = use(params);

  return (
    <div>
      <h1>Details for: {slug}</h1>
      <p>This is the sub-page for blog details.</p>
    </div>
  );
}
