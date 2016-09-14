import DS from 'ember-data';

export default DS.Model.extend({
  text:DS.attr('string'),
  upload:DS.belongsTo('upload'),
})
