import Controller from '@ember/controller';
import Ember from 'ember';

//var indexNum = 0;

export default Controller.extend({

  uid: Ember.computed(function() {
    return this.get('session.currentUser.uid');
  }),
  displayName: Ember.computed(function() {
    return this.get('session.currentUser.displayName');
  }),

  actions: {
    insertIntoStore(list) {
      this.store.unloadAll('list-item');
      this.store.unloadAll('temp-item');
      // let listItems = this.store.query('list-item', {
      //   orderBy: 'listId',
      //   equalTo: list.get('id')
      // });
      var idd = list.get('listId');

      this.get('store').query('list-item', {
        filter: {
          lid: idd
        }
      }).then(function(item) {
        var length = item.get('length');
        for (var i = 0; i < length; i++) {
          var arr = item.objectAt(i);
          var hash = arr.getProperties('itemName', 'itemAmt', 'itemDesc', 'listId', 'listPlace', 'lid');
          if (hash.lid == idd)
          {
            item.store.createRecord('temp-item', {
              listId: hash.listId,
              lid: hash.lid,
              listPlace: hash.listPlace,
              itemAmt: hash.itemAmt,
              itemName: hash.itemName,
              itemDesc: hash.itemDesc
            })
          }
        }
      });
      this.transitionToRoute('grocery.list', list);
    },
  }
})
