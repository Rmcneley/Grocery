import DS from 'ember-data';

export default DS.Model.extend({
  itemAmt: DS.attr('number'),
  itemName: DS.attr('string'),
  itemDesc: DS.attr('string'),
  username: DS.attr('string')
  //listName: DS.belongsTo('list') //probably 'username'-number
});
