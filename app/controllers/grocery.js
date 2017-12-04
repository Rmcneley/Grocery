import Ember from 'ember';
// import FileSaver from 'filesaver';

var gItems = [
  "Butter",
  "Pasta",
  "Pasta Sauce",
  "Pancake Mix",
  "Corn",
  "Salsa",
  "Donuts",
  "Candy",
  "ice cream",
  "Bread crumbs",
  "Coffee",
  "Creamer",
  "Mustard",
  "Torillas",
  "Bacon",
  "Juice",
  "Gum",
  "Syrup",
  "Cookies",
  "Detergent",
  "Soap",
  "Toothpaste",
  "Ketchup",
  "Flour",
  "Mayo",
  "Beans",
  "Nuts",
  "Protein Bar",
];
var count = 0;
var indexNum = 0;

export default Ember.Controller.extend({
  valSend: '',
  valEX: '',
  val1: 'Milk',
  val2: 'Eggs',
  val3: 'Bread',
  val4: 'Chips',
  val5: 'Cereal',
  val6: 'Beer',
  val7: 'Soda',
  val8: 'cheese',
  val9: 'Meat',
  val10: 'Detergent',
  val11: 'fruit',
  val12: 'Stuff for Tacos',
  val13: 'Peanut butter',
  val14: 'Jelly',
  val15: 'Vegetables',


  listID(){
    var list = this.store.peekAll('list');
    var length = list.get('length');
    return length + 1;
  },
  click(val){
    this.set('valSend', `${this.get(val)}`);
    this.set(val, gItems[count]);

    var store = this.get('store');
    store.createRecord('list-item', {
      itemAmt: 1,
      itemName: `${this.get('valSend')}`,
      listPlace: indexNum,
      listId: this.listID()
    });
    indexNum++;
    count++;
  },


  actions: {
    download() {
      var list = this.store.peekAll('list-item');
      var length = list.get('length');
      var fileInfo = []
      for (var i = 0; i < length; i++) {
        var temp = [];
        var arr = list.objectAt(i);
        var hash = arr.getProperties('itemName', 'itemAmt', 'itemDesc');
        temp = ['- ' + hash.itemName + '\n'];

        if (hash.itemDesc != '' && hash.itemDesc != null) {
          temp += "\tDescription: " + hash.itemDesc + '\n';
        }
        if (hash.itemAmt > 1) {
          temp += "\tQuantity: " + hash.itemAmt + '\n';
        }
        fileInfo.push(temp);
      }
      var file = new File(fileInfo, "Grocery List.txt", {
        type: "text/plain;charset=utf-8"
      });
      saveAs(file);
    },
    save() {
      let id = this.get('session.currentUser.uid');
      var list = this.store.peekAll('list-item');
      list.save();
      var newList = this.store.createRecord('list', {
        userId: id,
        listId: this.listID(),
        timeStamp: new Date(),
        listItems: list
      });
      newList.save();
    },
    clearList(){
      this.store.unloadAll();
    },

    gClick1() {
      this.click('val1');
    },
    gClick2() {
      this.click('val2');
    },
    gClick3() {
      this.click('val3');
    },
    gClick4() {
      this.click('val4');
    },
    gClick5() {
      this.click('val5');
    },
    gClick6() {
      this.click('val6');
    },
    gClick7() {
      this.click('val7');
    },
    gClick8() {
      this.click('val8');
    },
    gClick9() {
      this.click('val9');
    },
    gClick10() {
      this.click('val10');
    },
    gClick11() {
      this.click('val11');
    },
    gClick12() {
      this.click('val12');
    },
    gClick13() {
      this.click('val13');
    },
    gClick14() {
      this.click('val14');
    },
    gClick15() {
      this.click('val15');
    },
    addEX() {
      this.set('valSend', `${this.get('valEX')}`);
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        listPlace: indexNum,
        listId: this.listID()
      });
      indexNum++;
      this.set('valEX', '');
    }
  }

});
