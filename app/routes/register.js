import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
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
  }
});
