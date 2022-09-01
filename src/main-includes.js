import Vue from "vue";
// import { http } from "./http";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

Vue.config.productionTip = false;
// Vue.use(http);
Vue.prototype.$paystackKey = process.env.VUE_APP_PAYSTACK_PUBLIC_KEY;

//import layouts
import Private from "./layouts/private.vue";
import Public from "./layouts/public.vue";
import Auth from './layouts/auth.vue'


// layouts
Vue.component("private", Private);
Vue.component("public", Public);
Vue.component("auth", Auth);

//plugins
import './plugins/vue-inline-svg'

const requireComponent = require.context(
  "./components/global",
  true,
  /\.(js|vue)$/i
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
