import Controller from '@ember/controller';

var indexNum = 0;

export default Controller.extend({
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
