const { i18n } = require('./next-i18next.config');

module.exports = (phase, data) => {
  const { defaultConfig } = data;
  const basePath = process.env.BASE_PATH || '';
  return {
    ...defaultConfig,
    publicRuntimeConfig: {
      //
    },
    serverRuntimeConfig: {
      //
    },
    i18n,
    basePath,
    assetPrefix: `${basePath}/`,
    // redirects: async () => {
    //   return [{ source: '', destination: '', permanent: true }];
    // },
    // Allow to use variables.scss globally without import
    // sassOptions: {
    //   includePaths: ['./src'],
    //   prependData: `@import "~@style/variables.scss";`,
    // },
  };
};
