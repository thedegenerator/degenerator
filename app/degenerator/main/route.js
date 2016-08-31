import Ember from 'ember';

export default Ember.Route.extend({
  model({id}){
    return this.store.findAll('upload', id);
  }
});
