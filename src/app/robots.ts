import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.akgbytes.com";

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
