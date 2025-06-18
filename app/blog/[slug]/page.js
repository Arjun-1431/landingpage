'use client';

import { use } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BlogPost(props) {
  const searchParams = useSearchParams();

  const { slug } = use(props.params);

  const ref = searchParams.get('ref');

  return (
    <div>
      <h1>Blog Slug:</h1>
      <ul>
        <li><a href="/blog/hello-world/details">new route</a></li>
      </ul>
    </div>
  );
}
