import Ember from 'ember';
import upload from 'App/Models/Upload';

export default Ember.Controller.extend({
  actions: {
    remove() {
      const hits = upload.hits;
      const threshold = upload.threshold;

      if (hits => threshold) {
      this.store.find('uploadFile').then(function (post) {
        post.destroyRecord();
      });
    }
    },
  },
});
