import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.store.findRecord('upload', id);
  },
  afterModel(model){
    if (model.get('hits') >= model.get('threshold')) {
      model.destroyRecord();

      // Alert that the image is GONE

      return this.transitionTo('degenerator.index');
    }

    model.incrementProperty('hits');
    model.save();
  },
});
