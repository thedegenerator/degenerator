import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  degenThresh: DS.attr('string'),
  dither:DS.attr('boolean'),
  emboss:DS.attr('boolean'),
  sharpen:DS.attr('boolean'),
  blur:DS.attr('boolean'),
  implode:DS.attr('boolean'),
  cycle:DS.attr('boolean'),
  uploadFile:DS.attr('string')

});
