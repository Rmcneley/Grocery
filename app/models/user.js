import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  displayName: attr('string'),
  userId: attr('number'),
  emailAddress: attr('string'),
  groceryList: attr('string')
});
