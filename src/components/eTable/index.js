import table from "./src/index.vue";
export default {
  install(app) {
    app.component("e-table", table);
  },
};
