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

  firebase: Ember.inject.service(),

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
      var user = this.get('session.currentUser');
      console.log(user);
      // var list = this.store.peekAll('list-item');
      // store.createRecord('list', {
      //   // userId: ,
      //   // listId: ,
      //   // timeStamp:
      // });
      // newList.save();
    },

    gClick1() {
      this.set('valSend', `${this.get('val1')}`);
      this.set('val1', gItems[count]);
      count++;

      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick2() {
      this.set('valSend', `${this.get('val2')}`);
      this.set('val2', gItems[count]);

      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
      count++;
    },
    gClick3() {
      this.set('valSend', `${this.get('val3')}`);
      this.set('val3', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick4() {
      this.set('valSend', `${this.get('val4')}`);
      this.set('val4', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick5() {
      this.set('valSend', `${this.get('val5')}`);
      this.set('val5', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick6() {
      this.set('valSend', `${this.get('val6')}`);
      this.set('val6', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick7() {
      this.set('valSend', `${this.get('val7')}`);
      this.set('val7', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick8() {
      this.set('valSend', `${this.get('val8')}`);
      this.set('val8', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick9() {
      this.set('valSend', `${this.get('val9')}`);
      this.set('val9', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick10() {
      this.set('valSend', `${this.get('val10')}`);
      this.set('val10', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick11() {
      this.set('valSend', `${this.get('val11')}`);
      this.set('val11', gItems[count]);
      count++;
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    },
    gClick12() {
      this.set('valSend', `${this.get('val12')}`);
      this.set('val12', gItems[count]);

      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
      count++;
    },
    gClick13() {
      this.set('valSend', `${this.get('val13')}`);
      this.set('val13', gItems[count]);

      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
      count++;
    },
    gClick14() {
      this.set('valSend', `${this.get('val14')}`);
      this.set('val14', gItems[count]);

      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
      count++;
    },
    gClick15() {
      this.set('valSend', `${this.get('val15')}`);
      this.set('val15', gItems[count]);

      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
      count++;
    },
    addEX() {
      this.set('valSend', `${this.get('valEX')}`);
      var store = this.get('store');
      store.createRecord('list-item', {
        itemAmt: 1,
        itemName: `${this.get('valSend')}`,
        id: indexNum
      });
      indexNum++;
    }
  }

});
