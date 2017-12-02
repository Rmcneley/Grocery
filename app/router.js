import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('register');
  this.route('profile');
  this.route('grocMain');
  this.route('groceryList');
  this.route('grocery');
  this.route('register');
  //this.route('login');
});

export default Router;
