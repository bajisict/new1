import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text({ unique: true }),
    createdAt: column.date({ default: new Date() }),
    isActive: column.boolean({ default: true })
  }
});

const Post = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    url: column.text({ optional: true }),
    userId: column.number({ references: () => User.columns.id }),
    publishedAt: column.date({ optional: true }),
    createdAt: column.date({ default: new Date() })
  }
});

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    content: column.text(),
    postId: column.number({ references: () => Post.columns.id }),
    userId: column.number({ references: () => User.columns.id }),
    createdAt: column.date({ default: new Date() })
  }
});

export default defineDb({
  tables: { User, Post, Comment }
});
