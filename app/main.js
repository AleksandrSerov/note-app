const inputComponent = {
  template: `<input  :placeholder="placeholder" @keyup.enter="monitorEnterKey" v-model="input" type="text" class="input is-small"/>`,
  props: ["placeholder"],
  data() {
    return {
      input: ""
    };
  },
  methods: {
    monitorEnterKey() {
      this.$emit("add-note", {
        note: this.input,
        timestamp: new Date().toLocaleString()
      });
      this.input = "";
    }
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
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    }
  }
});
