import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // (probably) change this to get items from Firebase
      var userid = this.session.get('session.currentUser.uid');
        return this.store.query('list', {
          userId: userid,
          orderBy: 'date',
          limitToLast: 5
        });
}});
