import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.store.unloadAll();
  },

  model() {
    this.store.findAll('list');
    return this.store.peekAll('list-item');
  }
});
