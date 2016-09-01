import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
actions:{
  postComment(upload,formValues, reset){
    this.store.createRecord('comment', {...formValues, upload}).save();

    reset();
  }

}
});
