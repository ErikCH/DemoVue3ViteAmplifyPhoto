import { createApp } from "vue";
import App from "./App.vue";
import { applyPolyfills } from "@aws-amplify/ui-components/loader";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

import { defineCustomElements } from "@aws-amplify/ui-components/dist/components/index";

applyPolyfills().then(() => {
  defineCustomElements(window);
});

const app = createApp(App);
app.mount("#app");
