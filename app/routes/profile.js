import Route from '@ember/routing/route';
import Ember from 'ember';


var indexNum = 0;

export default Route.extend({
  firebaseApp: Ember.inject.service(),
  uid: Ember.computed(function() {
    return this.get('session.currentUser.uid');
  }),
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
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
      }, (error) => {
        console.log(error);
      });
    },
    signOut: function() {
      this.get('session').close();
    },
    insertIntoStore: function(list) {
      list.listItems.forEach((listItem) => {
        var store = this.get('store');
        store.createRecord('list-item', {
          itemAmt: listItem.itemAmt,
          itemName: listItem.itemName,
          id: indexNum
        });
        indexNum++;
      })
      this.transitionTo('grocery');
    }
  },
  model() {
    return this.get('store').query('list', {
      userId: this.get('uid')
    });
    //lists: this.store.findAll('list'),
  },
});
