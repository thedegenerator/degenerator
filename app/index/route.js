import Ember from 'ember';

export default Ember.Route.extend({
    model() {
  return Ember.$.getJSON("data/data.json");
}
});
