import Controller from '@ember/controller';
import Ember from 'ember';

var indexNum = 0;

export default Controller.extend({
  listItems: Ember.computed(function() {
    return this.store.findAll('list-item');
  }),

  uid: Ember.computed(function() {
    return this.get('session.currentUser.uid');
  }),

  filteredByUid: Ember.computed.filter('model', function(model) {
    return model.get('userId') === this.get('uid');
  }),

  actions: {
    insertIntoStore(list) {
      list.listItems.forEach((listItem) => {
        var store = this.get('store');
        store.createRecord('list-item', {
          itemAmt: listItem.itemAmt,
          itemName: listItem.itemName,
          id: indexNum
        });
        indexNum++;
      })
    }
  }

});
