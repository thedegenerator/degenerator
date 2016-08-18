import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
degenThresh: DS.attr('number'),
addHomepage:DS.attr('boolean'),
dither:DS.attr('boolean'),
emboss:DS.attr('boolean'),
sharpen:DS.attr('boolean'),
blur:DS.attr('boolean'),
implode:DS.attr('boolean'),
cycle:DS.attr('boolean'),
uploadFile:DS.attr('string')


});
