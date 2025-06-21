// src/pages/api/products.js
import { getAllProducts } from '../../lib/db';

export async function GET() {
  const products =await getAllProducts();
    console.log('ssssss',products.length)
  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export { GET };
