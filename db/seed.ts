import { db, User, Post, Comment, product } from 'astro:db';

export default async function seed() {
  // Insert sample users
  const users = await db.insert(User).values([
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' }
  ]);
  const products = await db.insert(product).values([
    { name: 'MacBook Pro M3', image_url: 'https://picsum.photos/400/250?random=2', category: 'Ноутбук', rating: 4, description: 'Хүчирхэг M3 процессортой', price: 2500000 },
    { name: 'iPhone 15 Pro', image_url: 'https://picsum.photos/400/250?random=2', category: 'Утас', rating: 4.8, description: 'Хамгийн сүүлийн үеийн iPhone', price: 1800000 }
  ]);

  // Insert sample posts
  // Adjust the inserted fields to match the Post schema (remove url and publishedAt if not defined in Post)
  await db.insert(Post).values([
    {
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1
    },
    {
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1
    },
    {
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1
    },
    {
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1
    },
    {
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1
    },
    {
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1
    }
  ]);

  // Insert sample comments
  await db.insert(Comment).values([
    {
      content: 'Great article! Very helpful for beginners.',
      postId: 1,
      userId: 2
    },
    {
      content: 'Thanks for sharing these insights.',
      postId: 1,
      userId: 3
    },
    {
      content: 'Looking forward to more advanced topics.',
      postId: 2,
      userId: 1
    }
  ]);
}