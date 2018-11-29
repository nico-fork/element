import TICON from './src/icon.vue';

/* istanbul ignore next */
TICON.install = function(Vue) {
  Vue.component(TICON.name, TICON);
};

export default TICON;
