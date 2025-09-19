import { Hono } from "hono";

interface Env {
  // Add your environment variables here
}

const app = new Hono<{ Bindings: Env }>();

export default app;
