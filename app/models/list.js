import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr('string'),
  id: DS.attr('number'),
  listName: DS.attr('string'),
  listItems: DS.hasMany('list-item')
});
