import Controller from '@ember/controller';
import Ember from 'ember';

var indexNum = 0;

export default Controller.extend({
  uid: Ember.computed(function() {
    return this.get('session.currentUser.uid');
  }),

  actions: {
    insertIntoStore(list) {
      this.store.unloadAll('list-item');
      console.log(list.get('id'));
      let listItems = this.store.query('list-item', {
        orderBy: 'listId',
        equalTo: list.get('id')
      })
      console.log(listItems);
      listItems.forEach((listItem) => {
        var store = this.get('store');
        store.createRecord('list-item', {
          itemAmt: listItem.itemAmt,
          itemName: listItem.itemName,
          id: indexNum
        });
        indexNum++;
      })
      this.transitionToRoute('grocery');
    }
  }

});
