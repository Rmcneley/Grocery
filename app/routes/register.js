import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
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
    register: function(email, pass, userName) {
      var route = this;

      console.log('Registering a new user... ' + email);

      const auth = this.get('firebaseApp').auth();

      auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
        const user = this.store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email,
        });
        return user.save();
      }).then(() => {
        var user = auth.currentUser;

        user.updateProfile({
          displayName: userName
        }).then(function() {
          route.transitionTo('profile');
          console.log('switching to grovery...');
        });
      });
    }
  }
});
