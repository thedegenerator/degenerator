import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registerUser(formValues) {
      const newUser = this.store.createRecord('user', formValues);

      newUser.save().then(() => {
        this.transitionToRoute('degenerator.login');
      }) .catch(() => {
        const errorBox = document.querySelector('.hidden-alert');
        const registerBox = document.querySelector('.register__box');
        errorBox.classList.toggle('hidden-alert');
        registerBox.addEventListener('click',function(){

          errorBox.classList='hidden-alert';
        });
        });

    },

  }

});
