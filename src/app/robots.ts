import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.sayhelloai.in/sitemap.xml",
    host: "https://www.sayhelloai.in",
  };
}
