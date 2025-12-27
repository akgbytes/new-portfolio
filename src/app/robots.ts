import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.akgbytes.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/draft/", "/preview/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
