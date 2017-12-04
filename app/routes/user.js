import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var userid = this.session.get('session.currentUser.uid');
        return this.store.query('user', {
          userId: userid,
        });
}});
