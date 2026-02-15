import { serve, type Server } from "bun";
import index from "./index.html";
import path from "node:path";

serve({
  routes: {
    "/api/hello": {
      async GET() {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT() {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },

    "/mobs/:file": async req => {
      const fileName = req.params.file;
      const file = Bun.file(`public/mobs/${fileName}`);
      return new Response(file);
    },

    // The root handles the HTML bundle
    "/": index,
  },

  async fetch(req: Request, server: any): Promise<Response> {
    const url = new URL(req.url);
    const pathName = url.pathname;

    // 1. Try matching routes (API, mobs, and root /)
    const response = await server.match(req);
    // If it matched and it's NOT the root (which we want to handle with potential asset matching)
    // Actually, if it matched a specific route, return it.
    if (response && pathName !== "/") return response;

    // 2. Check for files in the public directory
    const publicPath = path.join(process.cwd(), "public", pathName);
    const publicFile = Bun.file(publicPath);
    if (await publicFile.exists()) {
      return new Response(publicFile);
    }

    // 3. Fallback to the index bundle for SPA routing and assets (like /frontend.tsx)
    // We match the root request against the router to get the index.html bundle's response
    const indexResponse = await server.match(new Request(new URL("/", req.url)));
    if (indexResponse) return indexResponse;

    return new Response("Not Found", { status: 404 });
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server started`);
