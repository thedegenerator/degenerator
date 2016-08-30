import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  extension: DS.attr('string'),
  threshold: DS.attr('number'),
  hits: DS.attr('number'),
  user: DS.belongsTo('user'),

  exposeUrl: Ember.computed('extension', function() {
    return `http://localhost:3333/image/${this.get('id')}-expose.${this.get('extension')}`
  })
});
