import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: "/dashboard" });
  this.route('cart');
  this.route('splash-page',  {path: '/'});
});

export default Router;
