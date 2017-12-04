import Controller from '@ember/controller';
import Ember from 'ember';

var indexNum = 0;

export default Controller.extend({
  lists: null,

  listItems: Ember.computed(function() {
    return this.store.findAll('list-item');
  }),

  uid: Ember.computed(function() {
    return this.get('session.currentUser.uid');
  }),

  shoppingList: Ember.computed(function() {

    /*
    let templateLists = [];
    let lists = this.get('model');
    let that = this;
    lists.forEach((list) => {
        let id = list.get('listId');
        let innerList = {};
        innerList[id] = {};
        innerList[id]['timeStamp'] = list.get('timeStamp');
        innerList[id]['items'] = [];
        //templateLists[id]['items'] =
        that.store.query('list-item', {
          orderBy: 'listId',
          equalTo: id
        }).then((items) => {
          items.forEach((items) => {
            let amt = items.get('itemAmt');
            let itemName = items.get('itemName');
            let listId = items.get('listId');
            let item = {
              'itemAmt': amt,
              'itemName': itemName,
              'listId': listId
            };
            innerList[id]['items'].push(item);
          });
        });
        templateLists.push(innerList);
      });
        console.log(templateLists);
        return templateLists;
        */
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
