import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    deleteItem(arrIndex) {
      var store = this.get('store');
      store.findRecord('list-item', arrIndex).then(function(post) {
        store.unloadRecord(post);
        //Ember.run.schedule('destroy', post);
      });
    },
  }
});
