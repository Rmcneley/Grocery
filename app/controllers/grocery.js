import Ember from 'ember';

var gItems = ["cheese", "Pasta Sauce", "Pancake Mix", "Pesto Sauce", "Marinara", "Vegetables","corn","Donuts","candy","test1", "test2","test1", "test2","test1", "test2","test1", "test2","test1", "test2","test2","1","2","cheese", "Pasta Sauce", "Pancake Mix", "Pesto Sauce", "Marinara", "Vegetables","corn","Donuts","candy","test1", "test2","test1", "test2","test1", "test2","test1", "test2","test1", "test2","test2","1","2"];
var count = 0;

export default Ember.Controller.extend({
  valSend: '',
  valEX: '',
  val1 : 'Milk',
  val2 : 'Eggs',
  val3 : 'Bread',
  val4 : 'Wine ',
  val5 : 'Beer',
  val6 : 'Whiskey',
  val7 : 'Detergent',
  val8 : '409',
  val9 : 'Steak',
  val10 : 'chicken',
  val11 : 'pork',
  val12 : 'lamb',
  val13 : 'Turkey',
  val14 : 'Bread Crumbs',
  val15 : 'sugar',

  actions: {
    gClick1() {
      this.set('valSend',`${this.get('val1')}`);
      this.set('val1',gItems[count]);
      count++;
    },
    gClick2() {
      this.set('valSend',`${this.get('val2')}`);
      this.set('val2',gItems[count]);
      count++;
    },
    gClick3() {
      this.set('valSend',`${this.get('val3')}`);
      this.set('val3',gItems[count]);
      count++;
    },
    gClick4() {
      this.set('valSend',`${this.get('val4')}`);
      this.set('val4',gItems[count]);
      count++;
    },
    gClick5() {
      this.set('valSend',`${this.get('val5')}`);
      this.set('val5',gItems[count]);
      count++;
    },
    gClick6() {
      this.set('valSend',`${this.get('val6')}`);
      this.set('val6',gItems[count]);
      count++;
    },
    gClick7() {
      this.set('valSend',`${this.get('val7')}`);
      this.set('val7',gItems[count]);
      count++;
    },
    gClick8() {
      this.set('valSend',`${this.get('val8')}`);
      this.set('val8',gItems[count]);
      count++;
    },
    gClick9() {
      this.set('valSend',`${this.get('val9')}`);
      this.set('val9',gItems[count]);
      count++;
    },
    gClick10() {
      this.set('valSend',`${this.get('val10')}`);
      this.set('val10',gItems[count]);
      count++;
    },
    gClick11() {
      this.set('valSend',`${this.get('val11')}`);
      this.set('val11',gItems[count]);
      count++;
    },
    gClick12() {
      this.set('valSend',`${this.get('val12')}`);
      this.set('val12',gItems[count]);
      count++;
    },
    gClick13() {
      this.set('valSend',`${this.get('val13')}`);
      this.set('val13',gItems[count]);
      count++;
    },
    gClick14() {
      this.set('valSend',`${this.get('val14')}`);
      this.set('val14',gItems[count]);
      count++;
    },
    gClick15() {
      this.set('valSend',`${this.get('val15')}`);
      this.set('val15',gItems[count]);
      count++;
    },
    addEX() {
      this.set('valSend',`${this.get('valEX')}`);
    }
  }

});
