import Ember from 'ember';

export default Ember.Controller.extend({

 actions: {
   loginUser(formValues) {
     const authenticator = 'authenticator:application';

     this.get('session').authenticate(authenticator,
       { identification: formValues.email, password: formValues.password });
   },

    },

});
