import Ember from 'ember';

export default Ember.Route.extend({
  /*
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider, email, pass) {
      console.log('logging in a user: ' + email);
      let controller = this.controller;

      this.get('session').open('firebase', {
        provider: provider,
        email: email,
        password: pass
      }).then (() => {
        controller.set('email', null);
        controller.set('password', null);
      }, (error) => {
        console.log(error);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }*/
});
