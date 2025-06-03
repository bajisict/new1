export { renderers } from '../../renderers.mjs';

// import Database from 'better-sqlite3';
// import path from 'path';

// const db = new Database(path.join(process.cwd(), 'database.db'));

// // Orders table үүсгэх
// db.exec(`
//   CREATE TABLE IF NOT EXISTS orders (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     items TEXT NOT NULL,
//     total REAL NOT NULL,
//     order_date TEXT NOT NULL,
//     status TEXT DEFAULT 'pending'
//   )
// `);

// export async function POST({ request }) {
//   try {
//     const { items, total, orderDate } = await request.json();
    
//     const stmt = db.prepare(`
//       INSERT INTO orders (items, total, order_date)
//       VALUES (?, ?, ?)
//     `);
    
//     const result = stmt.run(
//       JSON.stringify(items),
//       total,
//       orderDate
//     );
    
//     return new Response(JSON.stringify({ 
//       success: true, 
//       orderId: result.lastInsertRowid 
//     }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ 
//       success: false, 
//       error: error.message 
//     }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   }
// }

// export async function GET() {
//   try {
//     const orders = db.prepare('SELECT * FROM orders ORDER BY order_date DESC').all();
    
//     return new Response(JSON.stringify(orders), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   }
// }

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
