const inputComponent = {
  template: `<input  :placeholder="placeholder" v-model="input" type="text" class="input is-small"/>`,
  props: ["placeholder"],
  data() {
    return {
      input: ""
    };
  }
};

new Vue({
  el: "#app",
  data: {
    notes: [],
    timestamps: [],
    placeholder: "Enter the note"
  },
  components: {
    "input-component": inputComponent
  }
});
