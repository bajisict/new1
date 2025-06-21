import { db, Post, product, User, Comment, eq, desc } from 'astro:db';

// Get all posts with user information
export async function getAllPosts() {
  return await db
    .select({
      id: Post.id,
      title: Post.title,
      content: Post.content
    })
    .from(Post);
}

export async function getAllProducts() {
  return await db
    .select({
      id: product.id,
      name: product.name,
      image_url: product.image_url,
      category: product.category,
      description: product.description,
      rating: product.rating,
      price: product.price
    })
    .from(product);
}

export async function getProductsByCategoryId(categoryId) {
  return await db
    .select({
      id: product.id,
      name: product.name,
      image_url: product.image_url,
      category: product.category,
      description: product.description,
      rating: product.rating,
      price: product.price
    })
    .from(product)
    .where(eq(product.category,categoryId));
}


export async function getProductById(id) {
  return await db
    .select({
      id: product.id,
      name: product.name,
      image_url: product.image_url,
      category: product.category,
      description: product.description,
      rating: product.rating,
      price: product.price
    })
    .from(product)
    .where(eq(product.id,id));
}
