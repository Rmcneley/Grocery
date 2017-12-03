import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  listId: DS.attr('number'),
  timeStamp: DS.attr('date'),
  listItems: DS.hasMany('list-item')
});
