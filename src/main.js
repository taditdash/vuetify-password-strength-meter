import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

// Vee-Validate
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

// extend('verify_password', {
//   getMessage(field, params, data) {
//     return (data && data.message) || 'Something went wrong';
//   },
//   validate(value, args) {
//     // Returns a Boolean or a Promise that resolves to a boolean.
//     return {

//     }
//   }
//   // getMessage: field => 'The ' + field + 'must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)',
//   // validate: value => {
//   //     var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
//   //     return strongRegex.test(value);
//   // }
// });

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('en', en);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
