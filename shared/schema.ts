import { pgTable, text, serial, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  businessName: text("business_name").notNull(),
  phoneNumber: text("phone_number").notNull(),
  address: text("address").notNull(),
  isWholesaler: boolean("is_wholesaler").default(true).notNull()
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull()
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => users.id),
  requirements: jsonb("requirements").notNull(),
  status: text("status").notNull(),
  type: text("type").notNull() // 'sample' or 'order'
});

export const insertUserSchema = createInsertSchema(users).extend({
  phoneNumber: z.string().regex(/^\+91\d{10}$/, "Must be a valid Indian phone number"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const insertOrderSchema = createInsertSchema(orders);
export const insertProductSchema = createInsertSchema(products);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Product = typeof products.$inferSelect;
export type Order = typeof orders.$inferSelect;