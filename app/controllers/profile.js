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
      this.store.unloadAll('temp-item');
      // let listItems = this.store.query('list-item', {
      //   orderBy: 'listId',
      //   equalTo: list.get('id')
      // });
      var idd = list.get('listId');
      console.log(idd);
      console.log('hello');

      this.get('store').query('list-item', {
        filter: {
          listID: list.get('listId')
        }
      }).then(function(peters) {
        var length = peters.get('length');
        console.log(length);
      });

      this.get('store').query('list-item', {
        filter: {
          lid: idd
        }
      }).then(function(item) {
        var length = item.get('length');
        console.log(length);
        for (var i = 0; i < length; i++) {
          console.log(idd);
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
        //return item;
      });
      //console.log(items);
      //console.log(length);
      // for (var i = 0; i < length; i++) {
      //   var arr = items.objectAt(i);
      //   var hash = arr.getProperties('itemName', 'itemAmt', 'itemDesc', 'listId', 'listPlace', 'lid');
      //   var arrM = [];
      //   arrM.push(hash);
      //   var store = this.get('store');
      //   store.createRecord('temp-item', {
      //     listId: hash.listId,
      //     lid: hash.lid,
      //     listPlace: hash.listPlace,
      //     itemAmt: hash.itemAmt,
      //     itemName: hash.itemName,
      //     itemDesc: hash.itemDesc
      //   })
      // listItems.forEach((listItem) => {
      //   var store = this.get('store');
      //   store.createRecord('list-item', {
      //     itemAmt: listItem.itemAmt,
      //     itemName: listItem.itemName,
      //     itemDesc: listItem.itemDesc,
      //     id: indexNum
      //   });
      //   indexNum++;
      // });
      this.transitionToRoute('grocery.list', list);
    },
  }
})
