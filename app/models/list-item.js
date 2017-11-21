import DS from 'ember-data';

export default DS.Model.extend({
  itemAmt: DS.attr('number'),
  itemName: DS.attr('string'),
  itemDesc: DS.attr('string'),
  listName: DS.belongsTo('list')
});
