import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(
  nextConfig,
  {
    // Options for the Sentry Webpack plugin
    // Suppresses source map uploading logs during build
    silent: false, // Set to false temporarily for debugging; change back to true for production

    org: "javascript-mastery", // Ensure this matches your Sentry organization
    project: "javascript-nextjs", // Ensure this matches your Sentry project
  },
  {
    // Options for the Sentry Next.js SDK
    // Uploads a larger set of source maps for better stack traces (may increase build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size); disable if not needed
    transpileClientSDK: false,

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers
    // Make sure this does not conflict with middleware or existing routes
    // tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shakes Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors
    automaticVercelMonitors: true,
  }
);
