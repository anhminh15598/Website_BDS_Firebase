module.exports = {
  env: 'development',

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert client url here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: 'true',

  clientUrl:
      'https://<insert project id here>.firebaseapp.com',

  defaultUser: '<insert your email here>',
};
