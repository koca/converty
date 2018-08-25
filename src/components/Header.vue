<template>
  <header class="header bg-grey-darker leading-normal">
    <div class="nav px-4 py-3 flex items-center w-full md:max-w-2xl mx-auto text-white text-center">
      <h1 class="logo text-white p-2 bg-black rounded-full inline-flex sm:text-4xl no-wrap">
        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
      </h1>
      <h1 class="logo-type ml-2 text-lg">Converty</h1>
      <p class="text-grey-light ml-auto"><span class="hidden md:inline">Transform your data, see </span><a @click.prevent="toggleExamples" href="#" class="text-grey-light hover:text-white no-underline ">Examples</a></p>
      <div class="navbar-item ml-auto flex">
        <button @click="resetState" class="hidden sm:block mr-2 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" click="output=''">Reset</button>
        <button @click="convert" class="bg-grey-darkest hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" click="convert">Convert</button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    toggleExamples() {
      this.$store.dispatch("TOGGLE_EXAMPLES");
    },
    resetState() {
      this.$store.dispatch("RESET");
    },
    convert() {
      const { input, format } = this.$store.getters;
      this.$store.dispatch("CONVERT", { input, format });
    }
  }
};
</script>
