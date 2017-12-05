import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    deleteItem(listPlace) {
      var store = this.get('store');
      store.findRecord('temp-item', listPlace).then(function(post) {
        store.unloadRecord(post);
      });
    },
  }
});
