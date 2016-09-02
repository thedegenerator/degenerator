import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  extension: DS.attr('string'),
  threshold: DS.attr('number', { defaultValue: 20 }),
  hits: DS.attr('number'),
  user: DS.belongsTo('user'),
  filters:DS.attr('string'),

  exposeUrl: Ember.computed('extension', function() {
    return `http://localhost:3333/app/${this.get('id')}-expose.${this.get('extension')}`
  }),

  viewColor: Ember.computed('hits', 'threshold', function() {
    const ratio = this.get('hits') / this.get('threshold');

    if (ratio < 0.26) {
      return 'green';
    } else if (ratio < 0.51) {
      return 'yellow';
    } else if (ratio < 0.76) {
      return 'orange';
  } else if (ratio < .91) {
      return 'red';
  } else if (ratio < 1) {
      return 'red95';
    }
  }),
});
