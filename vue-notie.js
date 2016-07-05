(function () {
  var VueNotie = {};
  var Notie = typeof require === 'function'
    ? require('notie')
    : window.Notie;

  if (!Notie) {
    throw new Error('[vue-notie] cannot locate notie');
  }

  VueNotie.install = function (Vue) {
    Vue.prototype.$notie = Notie;
  };

  if (typeof exports == 'object') {
    module.exports = VueNotie;
  } else if (typeof define == 'function' && define.amd) {
    define([], function(){ return VueNotie; })
  } else if (window.Vue) {
    window.VueNotie = VueNotie;
    Vue.use(VueNotie);
  }
})();
