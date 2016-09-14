import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('degenerator',{path: '/'}, function(){
    this.route('login');
    this.route('register');
    this.route('upload');
    this.route('main');
    this.route('destroyed', {path: '/:id/destroyed'});
    this.route('degenerate',{path: '/:id/degenerate'});
  });

});

export default Router;
