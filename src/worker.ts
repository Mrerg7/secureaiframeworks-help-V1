const SECURITY_HEADERS: Record<string, string> = {
  // HSTS: Cloudflare edge already enforces HTTPS; keep preload-ready policy
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  // Tight CSP for a static landing page (mailto: + Cloudflare Images + fonts + FA CDN)
  'Content-Security-Policy':
    "default-src 'self'; " +
    "img-src 'self' data: https://imagedelivery.net; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; " +
    "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
    "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; " +
    "connect-src 'self' https://cloudflareinsights.com; " +
    "form-action mailto:; frame-ancestors 'none'; base-uri 'self'",
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === 'www.secureaiframeworks.help') {
      const dest = `https://secureaiframeworks.help${url.pathname}${url.search}`;
      return Response.redirect(dest, 301);
    }
    const res = await env.ASSETS.fetch(request);
    // Apply security headers to HTML responses
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return res;
    const headers = new Headers(res.headers);
    for (const [k, v] of Object.entries(SECURITY_HEADERS)) {
      if (!headers.has(k)) headers.set(k, v);
    }
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  },
};
