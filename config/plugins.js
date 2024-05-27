// const crypto = require('crypto');
module.exports = ({ env }) => ({
    // ..."
    // 'users-permissions': {
    //   config: {
    //     jwtSecret: env('ADMIN_JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    //   },
    // },
    
    
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    ckeditor: {
      enabled: true,
    //   //resolve: "./src/plugins/strapi-plugin-ckeditor"
    },
  });