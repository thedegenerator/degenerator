import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.store.findRecord('upload', id);
  },
  afterModel(model){
    model.incrementProperty('hits');
    model.save();
  }
});
