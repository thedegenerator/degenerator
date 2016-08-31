import Ember from 'ember';
import Lettering from 'npm:letters.js'

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const x = new Lettering(this.words, {
      container: this.element,
      usage: "shuffle",
    });

    x.animate();
  }
});
