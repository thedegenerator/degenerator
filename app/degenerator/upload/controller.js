import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    uploadImg(formValues){
      const newUpload = this.store.createRecord('upload', formValues);
      newUpload.save().then(() => {
        this.transitionToRoute('degenerator.upload');
      });
    },
  }
});
