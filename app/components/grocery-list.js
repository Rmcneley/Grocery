import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    deleteItem(arrIndex) {
      var store = this.get('store');
      //let listItem = this.get('store').peekRecord('list-item', 1);
      // store.peekRecord('list-item', 1, { backgroundReload: false }).then(function(post) {
      //   post.deleteRecord();
      //   post.get('isDeleted'); // => true
      //   post.save(); // => DELETE to /posts/1
      // });
      store.findRecord('list-item', arrIndex).then(function(post) {
        store.unloadRecord(post);
      });
    },
    // updateAmt(amt,num) {
    //   this.get('store').findRecord('list-item', num).then(function(post) {
    //     // ...after the record has loaded
    //     post.set('itemAmt', amt);
    //   });
    // },
    // updateDesc(desc, num) {
    //   this.get('store').findRecord('list-item', num).then(function(post) {
    //     // ...after the record has loaded
    //     post.set('itemDesc', desc);
    //   });
    // }
  }
});
