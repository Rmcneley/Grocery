import Ember from 'ember';

export default Ember.Route.extend({
  /*firebaseApp: Ember.inject.service(),
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
    },
    register: function(email, pass) {
      console.log('Registering a new user... ' + email);
      let controller = this.controller;

      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
        const user = this.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email
        });
        return user.save();
      });
    }
  }*/
});
