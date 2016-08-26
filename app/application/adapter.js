import DS from 'ember-data';
import config from 'degenerator-ui/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  host: config.DS.host,
  namespace: config.DS.namespace,
});
