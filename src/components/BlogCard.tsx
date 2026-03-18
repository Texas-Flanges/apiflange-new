'use client';

import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link href={'/blog/' + post.slug} className="text-blue-600 hover:text-blue-800">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex justify-between items-center">
          <time className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <Link href={'/blog/' + post.slug} className="text-blue-600 hover:text-blue-800 font-semibold">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}