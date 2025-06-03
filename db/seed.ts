import { db, User, Post, Comment } from 'astro:db';

export default async function seed() {
  // Insert sample users
  const users = await db.insert(User).values([
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' }
  ]);

  // Insert sample posts
  await db.insert(Post).values([
    {
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=2',
      publishedAt: new Date('2024-01-15')
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2,
      url: 'https://picsum.photos/400/250?random=1',
      publishedAt: new Date('2024-01-20')
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=3',
      publishedAt: new Date('2024-01-25')
    },{
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=2',
      publishedAt: new Date('2024-01-15')
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2,
      url: 'https://picsum.photos/400/250?random=1',
      publishedAt: new Date('2024-01-20')
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=3',
      publishedAt: new Date('2024-01-25')
    },{
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=2',
      publishedAt: new Date('2024-01-15')
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2,
      url: 'https://picsum.photos/400/250?random=1',
      publishedAt: new Date('2024-01-20')
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=3',
      publishedAt: new Date('2024-01-25')
    },{
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=2',
      publishedAt: new Date('2024-01-15')
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2,
      url: 'https://picsum.photos/400/250?random=1',
      publishedAt: new Date('2024-01-20')
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=3',
      publishedAt: new Date('2024-01-25')
    },{
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=2',
      publishedAt: new Date('2024-01-15')
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2,
      url: 'https://picsum.photos/400/250?random=1',
      publishedAt: new Date('2024-01-20')
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=3',
      publishedAt: new Date('2024-01-25')
    },{
      title: 'Getting Started with Astro DB',
      content: 'This is a comprehensive guide to using Astro DB in your projects.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=2',
      publishedAt: new Date('2024-01-15')
    },
    {
      title: 'Advanced Database Queries',
      content: 'Learn how to perform complex queries with Astro DB and Drizzle ORM.',
      userId: 2,
      url: 'https://picsum.photos/400/250?random=1',
      publishedAt: new Date('2024-01-20')
    },
    {
      title: 'Database Best Practices',
      content: 'Tips and tricks for optimizing your database performance.',
      userId: 1,
      url: 'https://picsum.photos/400/250?random=3',
      publishedAt: new Date('2024-01-25')
    }
  ]);

  // Insert sample comments
  await db.insert(Comment).values([
    {
      id: 5,
      content: 'Great article! Very helpful for beginners.',
      postId: 1,
      userId: 2
    },
    {
      id: 6,
      content: 'Thanks for sharing these insights.',
      postId: 1,
      userId: 3
    },
    {
      id: 7,
      content: 'Looking forward to more advanced topics.',
      postId: 2,
      userId: 1
    }
  ]);
}