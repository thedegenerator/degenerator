import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

 actions: {
   loginUser(formValues) {
     const authenticator = 'authenticator:application';

     this.get('session').authenticate(authenticator,
       { identification: formValues.email, password: formValues.password })


       .then(() => {

         this.transitionToRoute('degenerator.upload');
         console.log('working');
       })
       .catch((reason) => {
         console.log(reason);
        const errorBox = document.querySelector('.hidden-alert');
        const loginBox = document.querySelector('.login__box');
        errorBox.classList.toggle('hidden-alert');
        loginBox.addEventListener('click',function(){
          console.log('cki');
          errorBox.classList='hidden-alert';
        });


       });
   },

    },

});
