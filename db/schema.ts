import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const quotes = sqliteTable('quotes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
  author: text('author').notNull(),
});
