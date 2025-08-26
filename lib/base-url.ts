export default function getBaseURL() {
  if (typeof window !== "undefined") return "";

  if (process.env.DOMAIN_URL) {
    // Use your custom domain if set
    return `https://${process.env.DOMAIN_URL}`;
  }

  if (process.env.VERCEL_URL) {
    // Fallback to Vercel preview/production URL
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local development fallback
  return "http://localhost:3000";
}
