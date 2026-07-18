export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === 'www.secureaiframeworks.help') {
      const dest = `https://secureaiframeworks.help${url.pathname}${url.search}`;
      return Response.redirect(dest, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
