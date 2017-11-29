import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        submitList: function() {
            var newList = this.store.createRecord('post', {
            userId: this.get('id'),
            userList: this.get('list'),
            timestamp: new Date().getTime()
          });
          newList.save();
        }
}});

