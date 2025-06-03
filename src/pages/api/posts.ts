import type { APIRoute } from 'astro';
import { db, Post, User } from 'astro:db';
import { eq, desc } from 'astro:db';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('limit')) || 10;
    const offset = Number(url.searchParams.get('offset')) || 0;

    const posts = await db
      .select({
        id: Post.id,
        title: Post.title,
        content: Post.content,
        publishedAt: Post.publishedAt,
        createdAt: Post.createdAt,
        userName: User.name
      })
      .from(Post)
      .innerJoin(User, eq(Post.userId, User.id))
      .orderBy(desc(Post.createdAt))
      .limit(limit)
      .offset(offset);

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { title, content, userId } = body;

    if (!title || !content || !userId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const result = await db.insert(Post).values({
      title,
      content,
      userId: Number(userId)
    }).returning();

    return new Response(JSON.stringify(result[0]), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};