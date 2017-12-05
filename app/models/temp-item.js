import DS from 'ember-data';

export default DS.Model.extend({
  listId: DS.belongsTo('list'),
  lid: DS.attr('number'),
  listPlace: DS.attr('number'),
  itemId: DS.attr('number'),
  itemAmt: DS.attr('number'),
  itemName: DS.attr('string'),
  itemDesc: DS.attr('string'),
});
