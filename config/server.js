module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    security: {
      contentSecurityPolicy: {
        directives: {
          ...env('CSP_DIRECTIVES', {}),
          'default-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'www.youtube.com'],
          'frame-src': ["'self'", 'www.youtube.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
        },
      },
    },
  },
});
