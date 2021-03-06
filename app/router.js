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
  this.route('grocery', function() {
    this.route('list', {path: '/list/:list_id'});
  });
  this.route('register');
  //this.route('login');
  this.route('user');
});

export default Router;
