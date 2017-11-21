import Component from '@ember/component';
import EmberObject from '@ember/object';
import Ember from 'ember';
import store from 'store';

// const List = EmberObject.extend({
//   init() {
//       this.set('listItem', ['eggs', 'cheese']);
//     }
// });

// let M = List.create({
//   name: 'List1',
//   ListItem: ['milk','bread']
// });

store.createRecord('list', {
  userName: "john",
  id: 1,
  listName: 'List1'
});

store.createRecord('list-item', {
  itemAmt: 1,
  itemName: 'Bacon',
  itemDesc: 'No Desc',
  listName: 'List1'
});

store.createRecord('list-item', {
  itemAmt: 2,
  itemName: 'Cheese',
  itemDesc: 'No Desc',
  listName: 'List1'
});

export default Component.extend({


  // val1: function(){
  //     var itemList = this.get("itemList");
  //     itemList.forEach(function(item){ // for iterating over an array, always use the forEach function
  //         item.set("desc", "CANCELLED"); // you have to call this set()-function to make changes to an Ember Object
  //     });
  // },
  val2: [1,2,3,4],

  valSend: '',
  actions: {
    addItem() {
      this.get('val2').pushObject('bacon');
      this.set('valSend',`${this.get('val2').objectAt(4)}`)
      //this.get('listAmt').pushObject('1');
      //this.get('listDesc').pushObject('Dont care What brand');
    }
  }
});
