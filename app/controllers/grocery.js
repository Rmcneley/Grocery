import Ember from 'ember';
// import FileSaver from 'filesaver';

var gItems = [
  "Milk",
  "Eggs",
  "Bread",
  "Chips",
  "Cereal",
  "Beer",
  "Soda",
  "Cheese",
  "Detergent",
  "fruit",
  "Stuff For Tacos",
  "Peanut Butter",
  "Jelly",
  "Vegetables",
  "Meat",
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
  val0: '',
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
  val6: '',
  val7: '',
  val8: '',
  val9: '',
  val10: '',
  val11: '',
  val12: '',
  val13: '',
  val14: '',
  init: function() {
    for (var i = 0; i < 15; i++) {
      this.set('val' + i, gItems[i]);
      count++;
    }
    this.store.unloadAll('temp-item');
  },
  listID() {
    var list = this.store.peekAll('list');
    var length = list.get('length');
    return length + 1;
  },
  click(val) {
    this.set('valSend', `${this.get(val)}`);
    this.set(val, gItems[count]);

    var store = this.get('store');
    store.createRecord('temp-item', {
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
      var list = this.store.peekAll('temp-item');
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
      var lid = this.listID();
      let id = this.get('session.currentUser.uid');
      var list = this.store.peekAll('temp-item');
      var length = list.get('length');
      for (var i = 0; i < length; i++){
        var arr = list.objectAt(i);
        var hash = arr.getProperties('itemName', 'itemAmt', 'itemDesc','listId','listPlace');
        console.log(lid);
        var item = this.store.createRecord('list-item', {
          listId: lid,
          lid: lid,
          listPlace:hash.listPlace,
          itemAmt: hash.itemAmt,
          itemName: hash.itemName,
          itemDesc:hash.itemDesc
        })
          item.save();
      }
      console.log('test');
      var list2 = this.store.peekAll('list-item');
      var newList = this.store.createRecord('list', {
        userId: id,
        listId: lid,
        timeStamp: new Date(),
        listItems: list2
      });
      console.log(newList);
      newList.save();
      count = 0;
      //this.init();
    },
    clearList() {
      this.store.unloadAll();
    },
    gClick1() {
      this.click('val0');
    },
    gClick2() {
      this.click('val1');
    },
    gClick3() {
      this.click('val2');
    },
    gClick4() {
      this.click('val3');
    },
    gClick5() {
      this.click('val4');
    },
    gClick6() {
      this.click('val5');
    },
    gClick7() {
      this.click('val6');
    },
    gClick8() {
      this.click('val7');
    },
    gClick9() {
      this.click('val8');
    },
    gClick10() {
      this.click('val9');
    },
    gClick11() {
      this.click('val10');
    },
    gClick12() {
      this.click('val11');
    },
    gClick13() {
      this.click('val12');
    },
    gClick14() {
      this.click('val13');
    },
    gClick15() {
      this.click('val14');
    },
    addEX() {
      this.set('valSend', `${this.get('valEX')}`);
      var store = this.get('store');
      store.createRecord('temp-item', {
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
