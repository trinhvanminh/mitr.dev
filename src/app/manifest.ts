import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/assets/images/brand/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/assets/images/brand/icons/web-app-manifest-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/assets/images/brand/icons/web-app-manifest-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/assets/images/web-app-manifest-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "/assets/images/screenshot-desktop-dark.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "/assets/images/screenshot-desktop-light.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
