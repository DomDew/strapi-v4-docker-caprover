module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '03e064c02a43caab04d19f137a6e5210'),
  },
});
