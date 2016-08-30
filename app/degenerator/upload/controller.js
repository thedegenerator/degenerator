import Ember from 'ember';
import config from 'degenerator-ui/config/environment';

export default Ember.Controller.extend({
  filesystem: Ember.inject.service(),
  session: Ember.inject.service(),
  filterTypes: [
    'blur',
    'emboss',
    'cycle',
    'implode',
    'sharpen',
    'dither',
  ],

  init() {
    this._super(...arguments);
    this.set('uploadFile', null);
  },

  actions:{
    selectPhoto() {
      this.get('filesystem').prompt().then((upload) => {
        this.set('uploadFile', upload[0]);
      });
    },
    uploadImg(formValues){
      const token = this.get('session.session.content.authenticated.access_token');
      formValues.filters = this.filterTypes.reduce((appliedFilters, filterType) => {
        if (formValues[filterType]) {
          return [...appliedFilters, filterType];
        }

        return appliedFilters;
      }, []);

      if (!this.uploadFile) {
        return alert('Yo! Upload a file!');
      }

      this.get('filesystem').fetch(`${config.DS.host}/uploads`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: {
          ...formValues,
          uploadFile: this.get('uploadFile'),
        },
      }).then((res) => res.json())
      .then((data) => {
        this.store.push(data);
        this.transitionToRoute('degenerator.main');
      });
    },
  }
});
