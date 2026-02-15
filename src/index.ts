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

    // Catch-all route for SPA routing
    "/*": index,
  },

  async fetch(req: Request, server: Server<undefined>): Promise<Response> {
    const url = new URL(req.url);
    const pathName = url.pathname;

    // 1. Check for files in the public directory
    const publicPath = path.join(process.cwd(), "public", pathName);
    const publicFile = Bun.file(publicPath);
    if (await publicFile.exists()) {
      return new Response(publicFile);
    }

    // 2. If we reach here, and it didn't match any route, and it's not a public file,
    // we return a 404. However, with "/*": index, most requests will be caught by the router.
    return new Response("Not Found", { status: 404 });
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server started`);
