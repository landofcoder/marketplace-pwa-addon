// const componentOverrideMapping = require('./componentOverrideMapping');
// const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin');

/**
 * Custom intercept file for the extension
 * By default you can only use target of @magento/pwa-buildpack.
 *
 * If do want extend @magento/peregrine or @magento/venia-ui
 * you should add them to peerDependencies to your package.json
 *
 * If you want to add overwrites for @magento/venia-ui components you can use
 * moduleOverrideWebpackPlugin and componentOverrideMapping
 */
module.exports = targets => {
  // Wrap the talon with this extension

//   const peregrineTargets = targets.of('@magento/venia-ui');
//   const talonsTarget = peregrineTargets.talons;

  // Set the buildpack features required by this extension
  const builtins = targets.of('@magento/pwa-buildpack');
  builtins.specialFeatures.tap(featuresByModule => {
    featuresByModule['@landofcoder/formbuilder-module'] = {
      cssModules: true,
      esModules: true
    };
  });


  targets.of('@magento/venia-ui').routes.tap(routes => {
    routes.push({
      name: 'MarketplaceHome',
      pattern: '/supplier.html',
      path: require.resolve('./components/home/index.js')
    });
    routes.push({
      name: 'ShopAll',
      pattern: '/shops.html',
      path: require.resolve('./components/shopAll/index.js')
    });
    routes.push({
      name: 'ShopFeatured',
      pattern: '/shops.html',
      path: require.resolve('./components/shopFeatured/index.js')
    });
    routes.push({
      name: 'ShopHome',
      pattern: '/shop/view/:shopUrl?',
      path: require.resolve('./components/shopHome/index.js')
    });
    routes.push({
      name: 'ShopProducts',
      pattern: '/shop/top-products/:shopUrl?',
      path: require.resolve('./components/shopProducts/index.js')
    });
    routes.push({
      name: 'ShopReviews',
      pattern: '/shop/reviews/:shopUrl?',
      path: require.resolve('./components/shopReviews/index.js')
    });
    routes.push({
      name: 'ShopContact',
      pattern: '/shop/contact/:shopUrl?',
      path: require.resolve('./components/shopContact/index.js')
    });
    routes.push({
      name: 'ShopPolicy',
      pattern: '/shop/policy/:shopUrl?',
      path: require.resolve('./components/shopPolicy/index.js')
    });
    routes.push({
      name: 'ShopReport',
      pattern: '/shop/report-spam/:shopUrl?',
      path: require.resolve('./components/shopReport/index.js')
    });
    return routes;
  });
};
