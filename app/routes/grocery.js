import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // (probably) change this to get items from Firebase
    return this.store.peekAll('list-item');
  }
});
