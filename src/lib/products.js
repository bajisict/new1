import db from 'astro:db'; // өөрийн SQL connection

export async function getProducts(limit, offset) {
  const [rows] = await db.query('SELECT * FROM product ORDER BY created_at DESC LIMIT ? OFFSET ?', [limit, offset]);
  return rows;
}

export async function getTotalProducts() {
  const [[{ total }]] = await db.query('SELECT COUNT(*) as total FROM product');
  return total;
}
