<template>
  <div class="examples hidden md:flex flex items-center  w-full md:max-w-2xl mx-auto px-2" v-if="showExamples">
    <div class="mt-4 p-2 md:shadow rounded-full w-full md:bg-white flex flex-col md:flex-row">
      <button v-for="(example,i) in examples" :key="i" @click="loadExample(i)" class="mr-0 md:mr-2 mb-2 md:mb-0 px-2 md:px-4 py-2 bg-blue text-white shadow rounded-full hover:bg-blue-dark focus:outline-none focus:shadow-outline">{{ example.name }}</button>
      <span class="p-2 text-grey hidden md:block">☁️ sky's the limit&trade; ☁️</span>
      <button @click="toggleExamples" class="md:ml-auto md:mr-2 font-bold flex flex-col items-center justify-center text-grey-darker mt-2 md:mt-0 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        <span class="md:hidden">close examples</span>
      </button>
    </div>
  </div>
</template>

<script>
const examples = [
  {
    name: "HTML",
    input: `google.com Google
facebook.com Facebook
twitter.com Twitter`,
    format: `<a href="https://www.%1$s" alt="%2$s">%2$s</a>`
  },
  {
    name: "JSON",
    input: `Joel, 1949, piano
Lennon, 1940, guitar
Grohl, 1969, drums
Burton, 1962, bass`,
    format: `{ name: '%1$s', instrument: '%3$s' },`
  },
  {
    name: "SQL",
    input: `1 jack male
2 jane female
3 mesut male`,
    format: `INSERT INTO Customers (id, name, gender)
VALUES ('%s', '%s', '%s');`
  },
  {
    name: "Custom Seperator",
    input: `@sep=#
1#jack#male
2#jane#female
3#mesut#male`,
    format: `INSERT INTO Customers (id, name, gender)
VALUES ('%s', '%s', '%s');`
  }
];
export default {
  data() {
    return {
      examples
    };
  },
  computed: {
    showExamples() {
      return this.$store.getters.showExamples;
    }
  },
  methods: {
    toggleExamples() {
      this.$store.dispatch("TOGGLE_EXAMPLES");
    },
    loadExample(id) {
      const { input, format } = examples[id];
      this.$store.commit("SET_INPUT", input);
      this.$store.commit("SET_FORMAT", format);
      this.$store.dispatch("CONVERT", { input, format });
    }
  }
};
</script>

<style>
</style>
