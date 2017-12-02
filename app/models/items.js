import DS from 'ember-data';

export default DS.Model.extend({
  itemId: DS.attr('number'),
  itemName: DS.attr('string'),
  itemRank: DS.attr('number'),
});
