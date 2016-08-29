import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  extension: DS.attr('string'),
  threshold: DS.attr('string'),
  user: DS.belongsTo('user'),
});
