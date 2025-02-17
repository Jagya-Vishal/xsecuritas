import { User, InsertUser, Product, Order } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createOrder(order: Omit<Order, "id">): Promise<Order>;
  getUserOrders(userId: number): Promise<Order[]>;
  sessionStore: session.Store;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private orders: Map<number, Order>;
  sessionStore: session.Store;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.orders = new Map();
    this.currentId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });

    // Seed products
    this.seedProducts();
  }

  private seedProducts() {
    const products: Omit<Product, "id">[] = [
      {
        name: "Traditional Jari Work",
        category: "jari",
        description: "Intricate golden thread work on premium fabric",
        imageUrl: "https://example.com/jari.jpg"
      },
      {
        name: "Sequence Work",
        category: "sequence",
        description: "Stunning sequence embellishments for sarees",
        imageUrl: "https://example.com/sequence.jpg"
      }
    ];

    products.forEach((product) => {
      const id = this.currentId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createOrder(order: Omit<Order, "id">): Promise<Order> {
    const id = this.currentId++;
    const newOrder: Order = { ...order, id };
    this.orders.set(id, newOrder);
    return newOrder;
  }

  async getUserOrders(userId: number): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(
      (order) => order.userId === userId,
    );
  }
}

export const storage = new MemStorage();
